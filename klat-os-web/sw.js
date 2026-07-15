Service Worker Registration for KLAT OS PWA

This service worker handles offline functionality and caching for the KLAT OS website.

Features:
- Offline page display
- Static asset caching
- API request caching
- Dynamic content caching

Version: 1.0.0
Cache Name: klat-os-cache-v1
Maximum Cache Age: 30 days

Self-exclude patterns:
- *.html
- *.css
- *.js
- *.json
- *.md
- *.woff2
- *.ttf
- *.woff
- *.png
- *.jpg
- *.jpeg
- *.gif
- *.svg
- *.webp
- *.ico
- manifest.webmanifest

APIResponse patterns:
- /api/*
- /forum/*
- /docs/*
- /releases/*

