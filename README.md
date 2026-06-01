# Personal-Web

[Edit in StackBlitz next generation editor](https://stackblitz.com/~/github.com/dynamics986/Personal-Web)

Demo: https://dynamics986-personal-xvzv.bolt.host

## GitHub Pages deployment

This is a static Vite + React app. GitHub Pages only needs the generated `dist` folder; it does not run Node.js, Express, Python, PHP, or a database in production.

The Vite `base` is configured as `/Personal-Web/`, so built CSS, JavaScript, and public assets resolve under:

```text
https://<username>.github.io/Personal-Web/
```

The app uses React Router's hash routing (`/#/blog`, `/#/projects`, `/#/cv`) so refreshing a nested page on GitHub Pages does not produce a 404.

### Deploy with GitHub Actions

1. Push the repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch, or run the "Deploy to GitHub Pages" workflow manually.

The workflow runs:

```bash
npm ci
npm run build
```

and publishes `dist`.

### Manual build

```bash
npm ci
npm run build
```

The static output folder is `dist`. If you deploy manually instead of using the workflow, publish the contents of `dist` to GitHub Pages.
