#!/bin/bash
# Build script for static GitHub Pages deployment

echo "Building static site with relative paths for GitHub Pages..."
vite build --base=./

echo "Creating 404.html for GitHub Pages routing..."
cp dist/public/index.html dist/public/404.html

echo "✓ Static build complete!"
echo "Deploy the dist/public/ folder to GitHub Pages"
echo ""
echo "Your site will work at:"
echo "  - https://username.github.io/repo-name/"
echo "  - Custom domain (if configured)"
