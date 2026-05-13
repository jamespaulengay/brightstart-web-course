# Deployment Guide

This project is a Vite app. The production files are created in `dist/` after running:

```bash
yarn install
yarn build
```

The public repository is:

```text
https://github.com/jamespaulengay/brightstart-web-course
```

The expected GitHub Pages URL is:

```text
https://jamespaulengay.github.io/brightstart-web-course/
```

## Recommended Method: Deploy From `gh-pages`

Use this method if GitHub Actions is unavailable or blocked.

1. Build the app:

```bash
yarn build
```

2. Create a temporary folder outside the project:

```bash
mkdir -p /tmp/brightstart-pages
rm -rf /tmp/brightstart-pages/*
cp -R dist/. /tmp/brightstart-pages/
touch /tmp/brightstart-pages/.nojekyll
```

3. Publish the temporary folder to the `gh-pages` branch:

```bash
cd /tmp/brightstart-pages
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy GitHub Pages"
git remote add origin https://github.com/jamespaulengay/brightstart-web-course.git
git push -f origin gh-pages
```

4. In GitHub, open the repository:

```text
https://github.com/jamespaulengay/brightstart-web-course
```

5. Go to:

```text
Settings -> Pages
```

6. Set:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

7. Save, then wait a few minutes and open:

```text
https://jamespaulengay.github.io/brightstart-web-course/
```

## Alternative Method: GitHub Actions

Use this only if GitHub Actions is enabled for the account.

1. Add a workflow at:

```text
.github/workflows/deploy.yml
```

2. Configure GitHub Pages:

```text
Settings -> Pages -> Source: GitHub Actions
```

3. Push to `main`.

GitHub will build the project and deploy `dist/` automatically.

## Updating The Live Site

After making changes:

```bash
yarn build
```

Then repeat the `gh-pages` publish commands above.

## Notes

- `vite.config.js` uses `base: "./"` so the built assets work under the repository path.
- `.nojekyll` prevents GitHub Pages from processing the built files with Jekyll.
- Do not commit `node_modules/` or `dist/` to `main`; publish only the contents of `dist/` to `gh-pages`.
