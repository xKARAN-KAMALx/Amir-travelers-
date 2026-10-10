# Amir Travelers website

A responsive static website designed for GitHub Pages.

## Files
- `index.html` - page structure and content
- `style.css` - navy and gold responsive styling
- `script.js` - bilingual UI, hamburger settings panel, fare calculator and WhatsApp message generation
- `assets/` - reserved for local images/logo if you later want to download and host images yourself

## Publish on GitHub Pages
1. Create/open the GitHub repository you want to use.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
5. Wait for the GitHub Pages URL to appear.

## WhatsApp booking
The booking form opens WhatsApp to `+91 74519 52707` with the booking details pre-filled. The customer must review and press Send; a website cannot send a WhatsApp message silently.

## Notes before publishing
- The calculator intentionally uses only entered distance × selected rate, as requested. It does not automatically apply the minimum 250 km note.
- The 250 km rule is shown as a note because the exact business rule is not confirmed.
- Toll and parking are shown as extra.
- The supplied email handle `@amirtraveller` is not a complete email address, so the footer uses `mailto:amirtraveller` as a temporary placeholder. Replace it with the full email address when confirmed.
- Manufacturer-linked car images may change or move over time. The Eeco seating variant should be verified with the business before advertising it as a 7-seater; the website currently labels it as specified by the business and recommends confirming the exact variant.
- Destination images are illustrative photographic references, not guaranteed to depict the exact named destination for every card. Verify/replace each image with a properly licensed, exact destination photo before commercial publication.
- Confirm rates, service area, vehicle variants, booking terms, and image usage rights before going live.
