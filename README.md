# AiClient

A ChatGPT-like web client built with Angular for the JavaScript frameworks course. It runs entirely in the browser: no backend, no database.

> 🚧 Work in progress. This README is updated as the project evolves.

## Tech stack

| Tool | Version | Purpose |
| --- | --- | --- |
| [Angular](https://angular.dev) | 22 | Front-end framework (client-side single-page app) |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling (via PostCSS) |
| [Prettier](https://prettier.io) | 3 | Code formatting |
| [Vitest](https://vitest.dev) | 5 | Unit tests |

## Prerequisites

- Node.js (recent LTS version)
- npm 11+

## Getting started

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the dev server on `http://localhost:4200/` |
| `npm run build` | Production build in `dist/` |
| `npm run watch` | Development build in watch mode |
| `npm test` | Run unit tests (Vitest) |
| `npm run format` | Format every `.ts`, `.html` and `.css` file in `src/` with Prettier |

## Configuration

### Tailwind CSS

Tailwind v4 is plugged into the Angular build through PostCSS:

- [`.postcssrc.json`](.postcssrc.json) enables the `@tailwindcss/postcss` plugin
- [`src/styles.css`](src/styles.css) imports Tailwind with `@import 'tailwindcss';`

Utility classes can be used directly in templates:

```html
<h1 class="text-3xl font-bold text-blue-600">AI Client</h1>
```

To customize the theme (colors, fonts…), use an `@theme { ... }` block in `src/styles.css` (there is no `tailwind.config.js` in v4).

## Project structure

```
src/
├── app/
│   ├── app.ts                 # Root component
│   ├── app.html / app.css     # Root component template and styles
│   ├── app.routes.ts          # Routes
│   └── app.config.ts          # Application providers
├── index.html
├── main.ts                    # Browser entry point
└── styles.css                 # Global styles + Tailwind import
```

## Features

_Coming soon._
