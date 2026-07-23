export const SITE_NAME = "Sixophor Software";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixophor.vercel.app";
export const SERVICE_AREA = "Upstate South Carolina";
export const CONTACT_EMAIL = "addison@sixophor.com";
// Where the contact form delivers. Resend's free tier only delivers to the
// account owner's address until sixophor.com is verified at resend.com/domains;
// after verifying, this can become addison@sixophor.com.
export const FORM_TO_EMAIL = "addisontechdev@gmail.com";
export const CONTACT_PHONE = "8649416314";
export const CONTACT_PHONE_DISPLAY = "(864) 941-6314";
// Cal.com booking links for the "book a call" CTAs. Leave a value empty and any
// button using it falls back to the on-page contact form.
export const BOOKING_URL_15 = "https://cal.com/addisonsmith/15min";
export const BOOKING_URL_30 = "https://cal.com/addisonsmith/30min";
