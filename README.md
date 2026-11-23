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

Deploy the generated `dist/` directory. Configure the static host to serve `index.html` for client-side routes such as `/services` and `/blog/elastic-performance`.

The contact form opens an email draft in the visitor’s mail app, rather than submitting to a backend. It also links to the original Squarespace form and to the Trainerize consultation. Verify the recipient and choose a form delivery service if direct submission is needed before launch.

See [SOURCE-NOTES.md](SOURCE-NOTES.md) for source details.
