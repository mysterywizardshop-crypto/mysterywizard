# TheMysteryWizard.com

The Mystery Wizard's website: one page with the books, the videos, live shows and an email signup.

## Change your links and email form

Open `index.html`, scroll near the bottom to **SITE SETTINGS**, and fill in:

- `youtube`, `tiktok`, `instagram`, `facebook`: your profile links. Leave one as `''` to hide it.
- `bookingEmail`: the email for show bookings. The Live Shows section stays hidden until this is set.
- `mailerliteAction`: your MailerLite form's action URL (see below).

## Connect MailerLite

1. In MailerLite, go to **Forms › Embedded forms** and create a form with just an email field.
2. Open the form's **HTML code** and copy the address after `action="`. It looks like
   `https://assets.mailerlite.com/jsonp/123456/forms/987654321/subscribe`.
3. Paste it into `mailerliteAction` in `index.html`.

## Get your email list

In MailerLite, go to **Subscribers**. Everyone who signs up appears there. Use **Export** to download a spreadsheet (CSV), or send newsletters straight from MailerLite.

## Change colors and fonts

At the top of `index.html`, the `:root` block lists every color and font with a comment saying where it's used.

## Images

All images live in the `images/` folder. To add the Wizard's portrait, save it as `images/wizard.jpg` and change `images/logo-full.jpg` to `images/wizard.jpg` in the Meet the Wizard section.
