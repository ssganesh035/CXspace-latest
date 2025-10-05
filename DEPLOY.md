# Deploying CXSpace to GitHub Pages

Your CXSpace site is now configured as a static React application ready for GitHub Pages deployment.

## Quick Deploy

### Option 1: Deploy the dist/public folder (Manual)

1. Build the static site:
   ```bash
   ./build-static.sh
   ```
   
   Or manually:
   ```bash
   vite build --base=./
   cp dist/public/index.html dist/public/404.html
   ```
   
   **Note**: The `--base=./` flag ensures assets use relative paths, which is required for GitHub Pages deployment in a repository subdirectory.

2. The static files will be in `dist/public/` directory (includes 404.html for routing)

3. Push the `dist/public` folder to your GitHub repository's `gh-pages` branch:
   ```bash
   cd dist/public
   git init
   git add -A
   git commit -m 'deploy'
   git push -f https://github.com/YOUR-USERNAME/YOUR-REPO.git main:gh-pages
   cd ../..
   ```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Click Save

### Option 2: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: |
          vite build --base=./
          cp dist/public/index.html dist/public/404.html
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

## How Routing Works on GitHub Pages

GitHub Pages is a static file server and doesn't support server-side routing. When a user navigates directly to `/about`, GitHub Pages looks for a file at that path and returns a 404 error if it doesn't exist.

**The Solution**: We copy `index.html` to `404.html`. When GitHub Pages can't find a route, it serves the `404.html` file (which is actually your React app). The React app then reads the URL and renders the correct page using client-side routing.

This is why the build script includes: `cp dist/public/index.html dist/public/404.html`

## What Changed

Your application is now a static site with:

- ✅ No backend server required
- ✅ All data is static (events, jobs, FAQs defined in `client/src/data/`)
- ✅ Client-side routing with wouter (works on GitHub Pages via 404.html redirect)
- ✅ All design, elements, and content preserved
- ✅ Fully functional React app with Tailwind CSS styling
- ✅ 404.html automatically created for GitHub Pages routing

## Local Development

To run the site locally during development:

```bash
npm run dev
```

This starts the development server with Express backend for hot reload. The backend is only used for development - the final build is purely static.

## Customizing Data

To update events, jobs, or FAQs, edit these files:
- `client/src/data/events.ts`
- `client/src/data/jobs.ts`
- `client/src/data/faqs.ts`

## Your Site URL

After deployment, your site will be available at:
- `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

or if you set up a custom domain:
- `https://your-custom-domain.com`
