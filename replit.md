# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Aeronautics LLP professional aerospace coaching and drone consultancy website.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite, Tailwind CSS, wouter, framer-motion, shadcn/ui

## Artifacts

### aeronautics-llp (React + Vite, previewPath: /)

Professional website for Aeronautics LLP — aerospace coaching and drone industry consultancy.

**Pages:**
- `/` — Home: hero, stats, value proposition, courses preview, FAQ, CTA
- `/courses` — Courses: 6 coaching programs for aerospace students and professionals
- `/consultancy` — Consultancy & Procurement: drone industry services
- `/insights` — Industry Insights: blog-style aerospace news and articles
- `/about` — About Us: mission, team, values, certifications
- `/contact` — Contact: form, address, socials

**Features:**
- Sticky navigation bar with mobile hamburger menu
- Smooth scroll animations and scroll-triggered reveals
- FAQ accordion on Home and Consultancy pages
- Professional footer with newsletter signup and social links
- "Book a Free Consultation" primary CTA across all pages
- WCAG 2.1 accessible, mobile-first responsive
- Deep aerospace blue + electric blue color palette
- Space Grotesk font, animated stats counters

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/aeronautics-llp run dev` — run frontend locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
