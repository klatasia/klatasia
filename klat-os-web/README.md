# KLAT OS Official Website

**Developer:** KlatAsia Software
**URL:** https://klat.asia
**License:** Apache 2.0

## Overview

A comprehensive static website for KLAT OS that is fully GitHub Pages ready, featuring:

- Progressive Web App (PWA) with offline support
- Dark & Light theme support
- Multi-language support (Indonesia & English)
- Forum system with JSON-based data
- Documentation with Markdown support
- Responsive design
- Search functionality

## Technology Stack

### Frontend

* HTML5
* CSS3 (Tailwind CSS)
* TypeScript
* Alpine.js (lightweight alternative to Vue 3)
* Vite
* Markdown
* Highlight.js
* Font Inter
* Lucide Icons

### Data Store

All data is stored in JSON files within the repository:

```
/database
    users.json
    forum.json
    categories.json
    roadmap.json
    releases.json
    downloads.json
    docs.json
```

## Key Features

### Forum System

Classic modern forum with categories:

- Development
- Kernel
- Desktop
- Drivers
- Applications
- Networking
- Filesystem
- Bug Report
- Feature Request
- General Discussion
- Announcements

### Website Structure

```
Home
Download
Documentation
Forum
Roadmap
Releases
Developers
Contributors
Blog
About
```

### Homepage Layout

**Hero Section:**
- Main title and subtitle
- Download, Documentation, GitHub, Forum buttons
- Feature showcase (Modern UI, Open Source, Secure, Fast, Cross Platform, Developer Friendly)

**Roadmap:** Latest release and thread information
**Contributors:** Community contributors

### Forum Categories

Each category contains threads with:

- Thread title
- Author
- Date
- Replies, Likes, Views
- Solved/Pinned status

Nested replies supported

### Multi-language Support

Translation files:

```
/lang/
    id.json
    en.json
```

All UI text automatically switches based on language selection.

### Dark Theme

Color schemes:

- Black theme
- Old gray theme
- Blue theme
- Green theme
(without transparency)

## GitHub Pages Setup

1. **Repository Structure**

The website is designed to work with GitHub Pages using the default gh-pages branch or the main branch:

```
klat-os-web/
├── index.html
├── vite.config.ts
├── package.json
├── manifest.webmanifest
├── sw.js
├── assets/
├── css/
├── js/
├── components/
├── pages/
├── database/
└── lang/
```

2. **Deployment Steps**

```bash
# Build for production
npm run build

# Push built files to gh-pages branch or main branch
```

The website will be fully functional without any server or database.

## Innovations for GitHub Pages

### Forum-based GitHub Issues
Optional: Map threads to GitHub Issues for collaborative discussions using GitHub authentication.

### Offline Mode
All documentation, roadmap data, and forums remain accessible through PWA cache even when offline.

### Local Search
Real-time search indexed from JSON files, providing fast performance without API calls.

### Native Markdown
Blog articles and documentation use `.md` files, automatically rendered on the website.

### Internationalization
Complete UI translation system with separate JSON files for each language.

## PWA Features

- Offline support
- Install app capability
- Background sync
- Cache management
- Update notifications

## File Structure

```
klat-os-web/
├── index.html                     # Main entry point
├── vite.config.ts                 # Vite configuration
├── package.json                   # Project dependencies
├── manifest.webmanifest           # PWA manifest
├── sw.js                          # Service worker for offline support
├── assets/                        # Static assets
├── css/                           # CSS files
├── js/                            # JavaScript files
├── components/                    # Vue components
├── pages/                         # Page components
├── database/                      # JSON data files
└── lang/                          # Translation files
```

## Development

### Local Development

```bash
npm run dev
```

This starts Vite in development mode with hot module replacement.

### Build for Production

```bash
npm run build
```

Builds the static site for production.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Commit and push
6. Create a Pull Request

## License

Apache License 2.0

See [LICENSE](/LICENSE) for more details.

## Roadmap

The website is continuously evolving:

1. **Current (v1.0.0)**
   - Static site with PWA support
   - Basic forum system
   - Multi-language support

2. **Next (v1.1.0)**
   - Advanced forum features
   - Enhanced UI components
   - Performance optimizations

3. **Future (v1.2.0)**
   - Advanced search
   - Analytics integration
   - Plugin architecture
