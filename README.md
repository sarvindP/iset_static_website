# iSET Website

Official marketing website for **iSET** (International Skill Enhancement Training) by **IAME** (Ideal Association for Minority Education).

- **Live site:** [https://iset-website.vercel.app](https://iset-website.vercel.app)
- **GitHub:** [https://github.com/sarvindP/iset_website](https://github.com/sarvindP/iset_website)

---

## Tech stack

| Tool | Version |
|------|---------|
| [Next.js](https://nextjs.org/) | 15 (App Router) |
| [React](https://react.dev/) | 19 |
| [TypeScript](https://www.typescriptlang.org/) | 5 |
| [Tailwind CSS](https://tailwindcss.com/) | 3 |

---

## Prerequisites

Install **Node.js 20 LTS or newer** (includes npm):

- Download: [https://nodejs.org/](https://nodejs.org/)
- Verify:

```bash
node -v
npm -v
```

---

## Getting started

### 1. Open the project folder

```bash
cd iset-website
```

### 2. Install dependencies

```bash
npm install
```

This reads `package.json` and installs everything into `node_modules/`.

> **Note:** Do **not** copy or send the `node_modules/` or `.next/` folders when sharing the project. The other person should run `npm install` on their machine.

---

## Running locally

### Development (recommended while editing)

```bash
npm run dev
```

Then open: **http://localhost:3000**

The dev server hot-reloads when you save files.

### Production build (test before deploy)

```bash
npm run build
npm start
```

Then open: **http://localhost:3000**

### Lint

```bash
npm run lint
```

---

## Project structure

```
iset-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── iset-logo.png
│   ├── iset-logo-white.png
│   ├── hero*.jpg
│   ├── image_gallary/      # Event gallery photos
│   ├── question_bank/      # Downloadable question papers (PDFs)
│   └── social/
├── src/
│   ├── app/                # Pages (Next.js App Router)
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   ├── curriculum/
│   │   ├── gallery/
│   │   ├── history/
│   │   ├── question-bank/
│   │   ├── layout.tsx      # Root layout (navbar + footer)
│   │   ├── sitemap.ts      # /sitemap.xml
│   │   └── robots.ts       # /robots.txt
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroCurveDivider.tsx
│   │   ├── PageHero.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── QuestionBankGrid.tsx
│   │   ├── ContactFAB.tsx
│   │   ├── StatsMarquee.tsx
│   │   └── ...
│   ├── data/
│   │   └── questionBank.ts # Question bank file list & metadata
│   └── lib/                # Shared helpers
│       ├── metadata.ts     # SEO titles, descriptions, canonical URLs
│       └── gallery-images.ts
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About iSET & IAME |
| `/curriculum` | Syllabus & exam pattern |
| `/gallery` | Event photo gallery |
| `/history` | Timeline & milestones |
| `/question-bank` | Sample questions & exam format |

SEO files (auto-generated):

- `/sitemap.xml`
- `/robots.txt`

---

## Environment variables

**None required** for local development or Vercel deployment.

External assets load from:

- IAME logo: `iameonline.com`
- Registration: `https://iameonline.com/login/index`
- Previous papers: `https://iameonline.com/iset_previous`

If you add a **custom domain**, update the site URL in:

- `src/lib/metadata.ts` → `SITE_URL`
- `src/app/sitemap.ts` → `baseUrl`
- `src/app/robots.ts` → `sitemap` URL

---

## Deploying to Vercel

1. Push the repo to GitHub (or import the folder in Vercel).
2. In [Vercel](https://vercel.com/), create a new project and connect the repo.
3. Use these settings (defaults are fine):

   | Setting | Value |
   |---------|-------|
   | Framework | Next.js |
   | Build command | `npm run build` |
   | Output directory | `.next` (auto) |
   | Install command | `npm install` |

4. Deploy. Vercel rebuilds on every push to `main`.

---

## Responsive behaviour

- **Desktop nav (≥ 1140px):** Horizontal links + Register button
- **Below 1140px:** Hamburger menu with left slide-in drawer
- **Gallery / mobile menu:** Full-screen overlays use higher z-index so they appear above the navbar

Breakpoint is defined in `tailwind.config.js` as `nav: '1140px'`.

---

## Troubleshooting

### `Cannot find module './XXX.js'` or runtime webpack errors

Usually a **stale build cache** or **multiple dev servers** running.

**Fix (Windows PowerShell):**

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Remove-Item -Recurse -Force .next
npm run dev
```

**Fix (macOS / Linux):**

```bash
pkill node
rm -rf .next
npm run dev
```

Then hard-refresh the browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac).

### Port 3000 already in use

Next.js will try the next port (e.g. 3001). Stop other Node processes or use:

```bash
npx kill-port 3000
npm run dev
```

### Images from IAME not loading

`next.config.mjs` allows images from `iameonline.com`. If the remote host changes, update `remotePatterns` in that file.

---

## Content notes (pending IAME confirmation)

Several items are marked with `// TODO` in the code and should be confirmed before publishing final copy:

- Student count (“10 Lakh+”)
- Founding year (~2004)
- Gold coin award (916 purity)
- Grand Finale 2024 venue & date
- Question bank subject percentages

Search the codebase for `TODO` to find all instances.

---

## Scripts reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production server (after build) |
| `npm run lint` | Run ESLint |

---

## Support links

- IAME website: [https://iameonline.com](https://iameonline.com)
- iSET registration: [https://iameonline.com/login/index](https://iameonline.com/login/index)
