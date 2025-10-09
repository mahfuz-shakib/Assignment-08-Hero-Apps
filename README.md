<div align="center">
  <h1>
    <a href="https://hero-apps-301.netlify.app/">HERO Apps (HERO.IO)</a>
  </h1>
  <p>Discover, visualize, and manage your favorite apps.</p>
  <p style="display:flex; justify-content:center; gap:8px;">
    <a href="https://hero-apps-301.netlify.app/">Netlify Live</a>
    |
    <a href="https://hero-apps-301.pages.dev/">CloudFlare Live</a>
    <!-- |
    <a href="#getting-started">Getting Started</a>
    |
    <a href="#features">Features</a> -->
  </p>
</div>

A production-ready React application for discovering mobile applications, viewing rich details, visualizing ratings, and managing local "installations". The app is optimized for speed and DX using Vite and Tailwind CSS.

---

## Features
- Browse all apps with total count and responsive grid
- Client-side search with instant filtering
- App detail page with downloads, average ratings, total reviews, and a ratings bar chart
- Local installation management persisted via `localStorage`
- Toast notifications for install/uninstall feedback
- Error pages and empty-state handling

## Tech Stack
- React 19
- Vite 7 (Dev server and production build)
- React Router 7 (Routing)
- Tailwind CSS 4 + DaisyUI (Styling & components)
- Axios (Data fetching)
- Recharts (Data visualization)
- React Toastify (Notifications)

## Architecture Overview
- Entry: `src/main.jsx` mounts the app and injects global styles.
- Routing: `src/App.jsx` configures routes with a `Root` layout (`Navbar`, `Outlet`, `Footer`).
- Data: `src/Hooks/useApps.js` fetches from `/appsData.json` (served from `public/`) and exposes `{ apps, loading, error }`.
- Pages: `Home`, `Apps`, `AppDetails`, `My_Installation`, and error pages render UI using the shared hook and components.
- Persistence: `src/Utils/localstorage.js` stores installed app IDs as a JSON array under the `installedApps` key in `localStorage`.

## Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Scripts
- `dev`: Start Vite dev server
- `build`: Create production build
- `preview`: Preview the production build locally
- `lint`: Run ESLint

## Project Structure
```text
src/
  Components/         # Reusable UI components (Navbar, Footer, AppCard, etc.)
  Hooks/              # Custom hooks (useApps)
  Layout/             # Root layout with shared chrome
  Pages/              # Route pages (Home, Apps, AppDetails, My_Installation, Error)
  Utils/              # Utilities (localStorage helpers, download conversion)
  assets/             # Local images/icons used by components
  App.jsx             # Router configuration
  main.jsx            # App bootstrap
  index.css, App.css  # Global styles & Tailwind setup
public/
  appsData.json       # App catalog data served by Vite at runtime
```

## Data & Persistence
- Source: `public/appsData.json` is fetched at `/appsData.json` by `useApps`.
- Persistence: Installed app IDs are saved in `localStorage` under `installedApps`.
- Utilities: `getFromLocalStorage`, `addToLocalStorage`, `removeFromLocalStorage`, `saveToLocalStorage` encapsulate storage logic.

## Styling
- Tailwind CSS v4 with DaisyUI plugin for component primitives.
- Custom utilities in `src/index.css` (e.g., gradient text, animations).

## Accessibility
- Decorative images use empty `alt` and/or `aria-hidden` where appropriate.
- Interactive controls use semantic HTML elements and visible focusable buttons.
- Consider adding `aria-label` to the search input for improved screen reader clarity.

## Performance Notes
- Vite-based HMR for fast local development.
- Static assets placed under `public/` are served efficiently by Vite.
- Client-side filtering; for large datasets, consider server-side search or pagination.

## Roadmap
- Debounced search with separate local loading state.
- Guard against duplicate installations in `localStorage`.
- Improve external links to use `target="_blank"` with `rel="noopener noreferrer"`.
- Tests for hooks and utilities.
---
---
#### Author
- Mahfuz Shakib
- GitHub: [mahfuz-shakib](https://github.com/mahfuz-shakib)

