# Sixophor Software

Marketing site for Sixophor Software, a small software design studio. Single page with anchor-linked sections: hero, services, work, process, about, contact.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` composes the page from section components
- `components/` has one file per section, plus the wordmark and contact form
- `lib/services.ts` is the single source for service names, descriptions, and pricing; the contact form dropdown reads from it too
- Brand colors live in `app/globals.css` under `@theme` (`ink`, `panel`, `accent`, `fg`, `muted`)

## Contact form

The form POSTs to `/api/contact`, which sends the message through Resend to `CONTACT_EMAIL`. Setup:

1. Create a free account at resend.com (sign up with the address in `lib/site.ts` so the free tier can deliver to it)
2. Create an API key
3. Locally: copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`
4. On Vercel: add `RESEND_API_KEY` under Project Settings > Environment Variables

Until the key is set, the form shows a fallback link that opens a prefilled email instead. Contact details (email, phone, service area, site URL) all live in `lib/site.ts`.

Note: on Resend's free tier without a verified domain, mail sends from `onboarding@resend.dev` and can only deliver to the account owner's email. Once a real domain exists, verify it in Resend and update the `from` address in `app/api/contact/route.ts`.

## SEO

- `app/opengraph-image.png` is the social share card
- JSON-LD (ProfessionalService + FAQPage) is in `app/page.tsx`
- `app/robots.ts` and `app/sitemap.ts` generate robots.txt and sitemap.xml
- Set `NEXT_PUBLIC_SITE_URL` when the real domain exists

## Deploy

Push to GitHub and import the repo in Vercel. No extra configuration needed beyond the env vars above.
