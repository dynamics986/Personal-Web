# FAN, Sixing Personal Website

Live site: https://dynamics986.github.io/Personal-Web/#/

This repository contains the source code for my personal academic and project portfolio website. The site introduces my background as a Mathematics and Information Engineering undergraduate student, highlights my research experience, shares blog and publication PDFs, presents selected programming and research projects, and provides a downloadable CV.

## Features

- Responsive personal profile with biography, education, skills, and research experience.
- Blog and publications section with view/download support for PDF materials.
- Projects page with filtering and external GitHub project links.
- CV page with a downloadable PDF resume.
- Dark/light theme support with persisted user preference.
- Static GitHub Pages deployment with hash routing for reliable refresh behavior.

## Technology Stack

- **React 18**: component-based frontend UI.
- **TypeScript**: type-safe application code and safer refactoring.
- **Vite**: fast local development server and optimized production builds.
- **React Router**: client-side routing between About, Blog, Projects, and CV pages.
- **Tailwind CSS**: utility-first styling for responsive layouts and consistent design.
- **Framer Motion**: smooth page and card animations.
- **Lucide React**: clean, lightweight icon components.
- **GitHub Actions**: automated build and deployment to GitHub Pages.

## Project Advantages

- **Fully static hosting compatible**: the production site is built into `dist` and can be served by GitHub Pages without a backend server.
- **Correct asset paths for project pages**: Vite is configured with `/Personal-Web/` as the base path, so JavaScript, CSS, and PDF assets load correctly under the GitHub Pages subpath.
- **Maintainable structure**: pages, layout components, reusable UI components, theme context, and static assets are separated clearly.

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```
