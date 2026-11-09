# AiClient

A ChatGPT-like web client built with Angular for the JavaScript frameworks course. It runs entirely in the browser: no backend, no database.

> 🚧 Work in progress. This README is updated as the project evolves.

## Tech stack

| Tool | Version | Purpose |
| --- | --- | --- |
| [Angular](https://angular.dev) | 22 | Front-end framework (client-side single-page app) |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling (via PostCSS) |
| [Lucide](https://lucide.dev/guide/packages/angular) (`@lucide/angular`) | 1 | Icons, as standalone Angular components |
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

Utility classes are used directly in templates, with the design tokens below:

```html
<h1 class="text-2xl font-bold text-foreground">AiClient</h1>
```

To customize the theme (colors, fonts…), use an `@theme { ... }` block in `src/styles.css` (there is no `tailwind.config.js` in v4).

### Design tokens

[`src/styles.css`](src/styles.css) defines semantic design tokens, available as Tailwind utilities. Templates use these names instead of raw palette colors, so the light and dark themes both work without extra classes.

| Group | Tokens (as utilities) |
| --- | --- |
| Surfaces | `bg-background`, `bg-surface`, `bg-surface-muted`, `border-border`, `border-border-strong` |
| Text | `text-foreground`, `text-foreground-muted` |
| Brand | `bg-primary`, `hover:bg-primary-hover`, `text-on-primary`, `bg-primary-soft`, `text-on-primary-soft`, `outline-focus-ring` |
| Chat | `bg-user-bubble`, `text-on-user-bubble`, `bg-assistant-bubble`, `bg-search-highlight` |
| Feedback | `text-danger`, `bg-danger-soft`, `text-success` |
| Code | `bg-code-background`, `bg-code-header`, `text-code-foreground`, `text-syntax-keyword`… |
| Shape & layout | `rounded-control`, `rounded-card`, `rounded-bubble`, `rounded-code`, `max-w-chat`, `max-w-form`, `shadow-card`, `animate-typing-dot` |

The dark theme is enabled by adding the `dark` class to `<html>`. Fonts: [Geist and Geist Mono](https://fonts.google.com/specimen/Geist), loaded from Google Fonts in `src/index.html`.

## Project structure

```
src/
├── app/
│   ├── app.ts                 # Root component
│   ├── app.html / app.css     # Root component template and styles
│   ├── app.routes.ts          # Routes
│   ├── app.config.ts          # Application providers
│   ├── type.ts                # Data models (Message, Conversation, User)
│   ├── components/            # Reusable display components (Button, Header)
│   ├── guards/                # Route guards (loggedGuard, guestGuard)
│   ├── pages/                 # Routed pages (HomePage, ConversationsListPage, Conversation)
│   └── services/              # Shared state and logic (UserService)
├── index.html
├── main.ts                    # Browser entry point
└── styles.css                 # Global styles + Tailwind import
```

## Features

### Username

- On the first visit, the home page (`/`) asks for a username in a validated form: required, 2 to 30 characters, with an error message under the field.
- The username is saved in the browser (`localStorage`), so it survives a page reload.
- Every username that has logged in is remembered in a list of known users (no duplicates), so each person can come back to their own conversations by typing the same name.
- The header shows the current user's name and a round button with their initial. Clicking it opens a menu to switch to another known user or to log out.

### Reusable components

| Component | Inputs | Outputs |
| --- | --- | --- |
| `Button` | `text`, `type`, `variant` (`primary` / `secondary`), `shape` (`default` / `round`), `disabled`, `ariaLabel` | `clicked` |
| `Header` | none (reads `UserService`) | none |

### Navigation

| Route | View |
| --- | --- |
| `/` | Home page, username form |
| `/conversations` | Conversation list (in progress) |
| `/conversations/:id` | One conversation (in progress) |

- Without a username, `/conversations` and `/conversations/:id` redirect to the home page (`loggedGuard`).
- With a username already saved, the home page redirects to `/conversations` (`guestGuard`).
- Any unknown URL redirects to the home page.
