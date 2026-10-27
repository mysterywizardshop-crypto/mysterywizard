# TheMysteryWizard.com

The Mystery Wizard's website: one page with the books, the videos, live shows and an email signup that saves to a Google Sheet.

## Change your links and email form

Open `index.html`, scroll near the bottom to **SITE SETTINGS**, and fill in:

- `youtube`, `tiktok`, `instagram`, `facebook`: your profile links. Leave one as `''` to hide it.
- `bookingEmail`: the email for show bookings. The Live Shows section stays hidden until this is set.
- `signupEndpoint` and `signupEmailField`: where email signups go (already set to the Mystery Wizard Google Form).

## Email signups (free, Google Form)

The website's signup box sends each email to the **Mystery Wizard Email Address** Google Form. The form saves every signup to its linked Google Sheet. Visitors never leave the site; they see a thank-you message.

Keep these form settings so signups keep working: anyone with the link can respond, **Limit to 1 response** off, **Collect email addresses** set to Do not collect.

## Get your email list

Open the Google Form, go to **Responses**, and click **View in Sheets**. Each row is one signup with the time and email. Download it with **File › Download › Comma-separated values (.csv)** to import into any email tool later.

## Change colors and fonts

At the top of `index.html`, the `:root` block lists every color and font with a comment saying where it's used.

## Images

All images live in the `images/` folder. To add the Wizard's portrait, save it as `images/wizard.jpg` and change `images/logo-full.jpg` to `images/wizard.jpg` in the Meet the Wizard section.
