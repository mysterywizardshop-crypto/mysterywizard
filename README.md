# TheMysteryWizard.com

The Mystery Wizard's website: one page with the books, the videos, live shows and an email signup that saves to a Google Sheet.

## Change your links and email form

Open `index.html`, scroll near the bottom to **SITE SETTINGS**, and fill in:

- `youtube`, `tiktok`, `instagram`, `facebook`: your profile links. Leave one as `''` to hide it.
- `bookingEmail`: the email for show bookings. The Live Shows section stays hidden until this is set.
- `signupEndpoint`: your Google Sheet signup link (see below).

## Email signups go to a Google Sheet (free)

1. Create a new Google Sheet named "Mystery Wizard Email List".
2. Open **Extensions › Apps Script**, delete what's there, and paste in everything from `google-sheet-signup/Code.gs`. Click **Save**.
3. Click **Deploy › New deployment**, choose type **Web app**, set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy** and allow access when Google asks.
4. Copy the **Web app URL** (it ends in `/exec`) and paste it into `signupEndpoint` in `index.html`.

## Get your email list

Open the Google Sheet: every signup is a row on the **Signups** tab (date, email, consent). Duplicates are skipped. To download it, use **File › Download › Comma-separated values (.csv)**. That CSV can be imported into Kit, MailerLite or any email tool later if you want to send newsletters.

## Change colors and fonts

At the top of `index.html`, the `:root` block lists every color and font with a comment saying where it's used.

## Images

All images live in the `images/` folder. To add the Wizard's portrait, save it as `images/wizard.jpg` and change `images/logo-full.jpg` to `images/wizard.jpg` in the Meet the Wizard section.
