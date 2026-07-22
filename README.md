# FAN, Sixing — Academic and Personal Website

Live site: [https://fansixing.com/](https://fansixing.com/)

This repository contains the source for two related website areas:

- `/` — a concise, English academic homepage.
- `/personal` — a personal portfolio with About, Blog, Projects, and dark mode.

The academic homepage does not link to the personal area. The personal header includes a link back to the academic homepage.

## Main routes

- `/` — Academic homepage
- `/personal` — About and CV summary
- `/personal/blog` — Blog posts and PDF notes
- `/personal/projects` — Programming and research projects
- `/personal/cv` — Compatibility redirect to `/personal`

Older hash routes such as `/#/blog`, `/#/projects`, and `/#/cv` are migrated to their current personal-site routes when the application starts.

## Technology

- React 18 and TypeScript
- Vite
- React Router with `BrowserRouter`
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Actions and GitHub Pages

## Local development

Install the exact locked dependency versions:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Run the code checks:

```bash
npm run lint
npm run typecheck
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

The generated `dist/` directory is a build artifact. Do not edit its hashed files manually; Vite recreates and may rename them during every build.

## Static assets

Files under `public/` keep stable website paths:

- `public/images/` — portraits and project images
- `public/pdfs/` — CV and blog PDFs
- `public/CNAME` — preserves the `fansixing.com` custom domain

The CV is linked directly from `public/pdfs/Francis_CV.pdf`; there is no separate CV page.

## GitHub Pages deployment

Pushing `main` runs `.github/workflows/deploy.yml`, builds the site, and deploys `dist/` to GitHub Pages. The `postbuild` script copies `dist/index.html` to `dist/404.html`, allowing `BrowserRouter` paths such as `/personal/projects` to load directly and refresh correctly.

Detailed editing instructions are maintained locally in `docs/edit.md`. The entire `docs/` directory is intentionally ignored by Git.
