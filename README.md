# TheMysteryWizard.com

The Mystery Wizard's website: a home page with the books, the videos, live shows and an email signup that saves to a Google Sheet, plus a contact page (`contact.html`) that saves messages to a Google Sheet.

## Change your links and email form

Open `index.html`, scroll near the bottom to **SITE SETTINGS**, and fill in:

- `youtube`, `tiktok`, `instagram`, `facebook`: your profile links. Leave one as `''` to hide it.
- `bookingEmail`: optional. Leave it empty and the Live Shows "Ask about booking" button opens the contact page with "Book a live show" picked. Fill it in to make that button open an email instead.
- `signupEndpoint` and `signupEmailField`: where email signups go (already set to the Mystery Wizard Google Form).

## Email signups (free, Google Form)

The website's signup box sends each email to the **Mystery Wizard Email Address** Google Form. The form saves every signup to its linked Google Sheet. Visitors never leave the site; they see a thank-you message.

Keep these form settings so signups keep working: anyone with the link can respond, **Limit to 1 response** off, **Collect email addresses** set to Do not collect.

## Contact page (free, Google Form)

`contact.html` has a form for teachers, librarians and parents. Each message goes to the **Mystery Wizard Contact** Google Form, which saves it to a linked Google Sheet. Your email address never appears on the site.

Form setup: five **Short answer / Paragraph** questions (Name, Email, Topic, School or library, Message), none required, anyone with the link can respond, **Limit to 1 response** off, **Collect email addresses** set to Do not collect. Then in **CONTACT SETTINGS** near the bottom of `contact.html`, fill in `endpoint` (the form's link ending in `/formResponse`) and each question's `entry.` number.

To get an email when a message arrives: open the form, **Responses › ⋮ › Get email notifications for new responses**. The email says there's a new response; open the Sheet to read it.

Until `endpoint` is set, the form shows "The contact form opens soon."

## Free Apprentice Kit

After someone signs up, the page shows a button to download the free Apprentice Kit (`downloads/Mystery-Wizard-Apprentice-Kit.pdf`: the Compass of Wonders craft plus the Wizard's welcome letter). To swap in a new freebie, replace that PDF with one of the same name, and update `images/apprentice-kit.jpg` (the preview next to the signup box). `robots.txt` keeps the `downloads/` folder out of search results.

## Get your email list

Open the Google Form, go to **Responses**, and click **View in Sheets**. Each row is one signup with the time and email. Download it with **File › Download › Comma-separated values (.csv)** to import into any email tool later.

## Change colors and fonts

At the top of `index.html`, the `:root` block lists every color and font with a comment saying where it's used.

## Images

All images live in the `images/` folder. To add the Wizard's portrait, save it as `images/wizard.jpg` and change `images/logo-full.jpg` to `images/wizard.jpg` in the Meet the Wizard section.

## Visitor stats

Traffic is tracked with Cloudflare Web Analytics (free, no cookies). See it in the Cloudflare dashboard under **Analytics & Logs › Web Analytics**. The tracking snippet is at the very bottom of `index.html`, just above `</body>`.
