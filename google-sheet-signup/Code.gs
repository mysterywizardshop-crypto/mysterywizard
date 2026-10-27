/**
 * Mystery Wizard email signups -> this Google Sheet.
 * Paste into Extensions > Apps Script, then Deploy > New deployment > Web app
 * (Execute as: Me, Who has access: Anyone). Copy the Web app URL into the site.
 */
const SHEET_NAME = 'Signups';
const NOTIFY_EMAIL = '';   // optional: put your email here to get a note for each new signup

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return reply('ok');                 // spam trap: bots fill this hidden field
  const email = String(p.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return reply('invalid');
  if (p.adult !== 'yes') return reply('consent');

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    const last = sheet.getLastRow();
    if (last > 1) {
      const existing = sheet.getRange(2, 2, last - 1, 1).getValues().flat();
      if (existing.indexOf(email) !== -1) return reply('ok');   // already on the list
    }
    sheet.appendRow([new Date(), email, 'Yes (18+)', String(p.page || '').slice(0, 200)]);
  } finally {
    lock.releaseLock();
  }
  if (NOTIFY_EMAIL) MailApp.sendEmail(NOTIFY_EMAIL, 'New Mystery Wizard signup', email);
  return reply('ok');
}

function doGet() { return reply('ready'); }

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Signed up', 'Email', 'Consent', 'Page']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function reply(status) {
  return ContentService.createTextOutput(JSON.stringify({ status: status }))
    .setMimeType(ContentService.MimeType.JSON);
}
