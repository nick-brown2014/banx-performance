# Banx Performance

A React, TypeScript, and Vite rebuild of the Banx Performance brochure site.

```sh
npm ci
npm run dev
npm test
npm run lint
npm run build
npm run preview -- --host 0.0.0.0 --port 4173
```

Deploy the Vite project on Vercel. The frontend build goes to `dist/`; the Vercel Function at `api/contact.ts` handles `POST /api/contact`. For another host, deploy the API separately behind that same path, and serve `index.html` for client-side page routes.

## Contact delivery

Set these **server-only** environment variables in Vercel (do not prefix them with `VITE_` or commit credentials):

| Variable | Purpose |
| --- | --- |
| `BANX_RESEND` | Resend API key with permission to send from the configured domain. |
| `CONTACT_FROM_EMAIL` | Optional sender override. Defaults to `Banx Performance <contact@banxperformance.com>`; production sends require Resend to finish verifying that domain or an authorized verified sender override. |
| `CONTACT_INBOX` | Optional recipient override. Defaults to `banxperformance@outlook.com`. On Vercel, leave this variable unset or set it to the same address for production delivery. |

Plain Vite dev and preview serve only the frontend. Use `vercel dev` with the server variables configured to exercise the form locally. For live test submissions, explicitly set `CONTACT_FROM_EMAIL=onboarding@resend.dev` and `CONTACT_INBOX=delivered@resend.dev`. The original Squarespace contact form remains available as a fallback while DNS verification is pending.

The endpoint validates inputs server-side and silently discards requests that fill the hidden website field. Consider platform-level rate limiting if the form attracts abuse.

See [SOURCE-NOTES.md](SOURCE-NOTES.md) for source details.
