# BrightStart Web Course

An ADHD-friendly 45-lesson interactive course for a teen beginner learning HTML, CSS, JavaScript, forms, responsive design, debugging, and accessibility basics.

## Run Locally

```bash
yarn install
yarn dev
```

Then open the local URL printed by Vite.

## Scripts

- `yarn dev` starts the development server.
- `yarn build` creates a production build in `dist/`.
- `yarn preview` serves the production build locally.
- `yarn check` verifies the JavaScript syntax.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a public GitHub repository on the `main` branch.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set **Source** to **GitHub Actions**.
5. The workflow will build the Vite app and deploy `dist/`.

## Project Structure

```text
index.html
src/
  app.js
  styles.css
```

The app stores learner progress in `localStorage`, so no backend or account is required.
