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

The form opens the visitor's email app with a prefilled message (mailto). No backend or keys needed. To switch to real form delivery later, swap the submit handler in `components/ContactForm.tsx` for a POST to Formspree, Resend, or an API route.

The contact address is set in `components/ContactForm.tsx` (`CONTACT_EMAIL`).

## Deploy

Push to GitHub and import the repo in Vercel. No extra configuration needed.
