---
name: portfolio_redesign_2026
description: Portfolio redesign from multi-page playful to single-page minimal engineering portfolio
type: project
---

Redesigned personal portfolio from multi-page React + Vite app (playful, animation-heavy) to a single-page minimal engineering portfolio.

**Why:** User wanted a professional, technical, calm aesthetic — removed floating shapes, stars, progress bars, animated counters.

**How to apply:** The site is now a single `HomePage.jsx` with scroll-based anchor navigation. All other pages (AboutPage, ProjectsPage, ServicesPage, ContactMePage) are no longer routed but still exist as files.

**Design decisions:**
- Background: `#080e1a` dark navy with subtle CSS grid overlay (no decorative blobs)
- Only `animate-fadeInUp` used on hero section
- Nav links scroll to anchor IDs: hero, about, leadership, projects, technologies, exploring, mentorship, contact
- Orange accent (`#f97316`) kept for labels and hover states only
- Cards: flat border, no scale/lift effects on hover (only border color change)
- Tech skills: categorized lists (Frontend, Backend, Mobile, Security & Systems) — no progress bars
- `html { font-size: 100% }` — fixed from previous 62.5% which was scaling down all Tailwind text

**Next steps (user mentioned):**
- Migrate to Next.js (static export for Hostinger compatibility)
- Update GitHub/LinkedIn/Email placeholder links with real URLs
- Commit and push to GitHub for Hostinger deployment
