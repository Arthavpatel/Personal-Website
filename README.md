# Personal Website

This repository contains the source for a personal website for Arthav Patel. The project is primarily TypeScript-based (frontend), and includes code, assets, and build/deploy configuration.

## Tech stack
- Language: TypeScript (majority of code)
- Likely frameworks/tools: (check package.json for exact dependencies — commonly React, Next.js, Vite, or similar)
- HTML/CSS for markup and styling
- JavaScript for small scripts and utilities

## Local development

1. Prerequisites
   - Node.js (recommend LTS version, e.g., 18+)
   - npm or yarn

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Run development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Build for production
   ```
   npm run build
   # or
   yarn build
   ```

5. Preview production build (if applicable)
   ```
   npm run start
   # or
   yarn start
   ```

Note: Exact scripts (dev/build/start) depend on the framework used. Check `package.json` to confirm available scripts and adjust commands accordingly.

## Project structure (typical)
- public/ — static assets (images, favicon)
- src/ — TypeScript source files (components, pages, styles)
- styles/ — global CSS or CSS-in-JS
- package.json — scripts and dependency list
- README.md — this file

## Customization & Deployment
- Update personal details and content in `src/` (pages/components).
- Deploy to platforms like Vercel, Netlify, or GitHub Pages:
  - Vercel works very well with TypeScript/Next.js projects — connect the repository and select build command from package.json.
  - For static sites, ensure `build` produces a `dist` or `out` folder and configure the chosen host accordingly.

## Accessibility & Performance
- Run Lighthouse or similar tools to measure performance, accessibility, and SEO.
- Optimize images and use modern formats (WebP/AVIF) to improve load times.

## Contributing
This is a personal site; contributions are optional. For changes:
- Fork and create a branch
- Make changes and run the dev server locally
- Submit a PR describing the change

## Contact
Arthav Patel — GitHub: [@Arthavpatel](https://github.com/Arthavpatel)
