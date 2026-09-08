# The Tea Cozy

A responsive marketing site for a fictional boutique tea shop, built as a front-end/web design portfolio project.

**Live demo:** [jobrophoto.github.io/teacozy](https://jobrophoto.github.io/teacozy/)

## Overview

The Tea Cozy is a single-page site covering a shop's mission, featured teas, and store locations. It started as a static desktop-only layout and was rebuilt into a fully responsive, token-based design system — including a custom color palette, a serif/sans font pairing, and a hand-built hamburger navigation menu (no frameworks or libraries).

## Features

- Fully responsive layout, tested down to phone width (375px) and tuned for in-between sizes like tablets (see [Design Decisions](#design-decisions))
- Custom hamburger navigation menu with vanilla JavaScript and proper accessibility attributes (`aria-expanded`, `aria-label`), which also self-closes after a link is tapped
- Sticky navbar with a frosted-glass (`backdrop-filter: blur()`) background that stays translucent and legible as content scrolls underneath it
- Working, smooth-scrolling nav links that land correctly below the sticky nav instead of underneath it
- Scroll-triggered reveal animations (fade/slide-in) built with the `IntersectionObserver` API — no animation library
- Hover interactions on tea and location cards: a lift + soft shadow, plus an image zoom (clipped to rounded corners) on the tea cards
- Click-to-directions location cards — each address links out to Google Maps directions in a new tab
- A soft gradient scrim behind the hero and locations photos instead of a flat solid-color band, for readable text without hard edges
- A CSS custom-property (`:root` variables) design system for color and typography, instead of hardcoded values
- Fluid typography via `clamp()` so headings scale smoothly with the viewport instead of jumping at breakpoints
- Google Fonts pairing: [Fraunces](https://fonts.google.com/specimen/Fraunces) for headings, [Work Sans](https://fonts.google.com/specimen/Work+Sans) for body text
- Inline SVG data-URI favicon (no separate image asset needed)

## Tech Stack

- HTML5 (semantic markup)
- CSS3 — Flexbox, CSS custom properties, `object-fit`, `clamp()`, media queries
- Vanilla JavaScript (no frameworks or build tools — the whole site runs by opening `index.html` directly)

## Design Decisions

- **Palette:** a warm near-black background and cream text instead of pure black/white, with a muted accent color, to feel more intentional and pair with the site's tea/wood-toned photography.
- **Typography:** pairing a serif display font (Fraunces) for headings with a clean sans-serif (Work Sans) for body copy is a common editorial/boutique pattern — it reads as more designed than a single font used everywhere.
- **Breakpoints tied to content, not devices:** rather than one generic "mobile" breakpoint, each section's breakpoint was chosen based on when its specific content actually breaks. For example, the Locations section's three-card row needs roughly 1020px of width to avoid overflowing, so it gets its own `1024px` breakpoint — separate from the navbar's `768px` breakpoint, which is fine for a short link list. Testing at an iPad Air's `820px` width caught this gap during development.
- **Stacking context / `z-index`:** the mobile dropdown menu initially rendered *behind* the page's hero image, because multiple sections used `position: relative` for image-overlay effects and, without an explicit `z-index`, later elements in the HTML painted on top of earlier ones. Giving the navbar an explicit `z-index` fixed it — a good example of why `position: relative` alone doesn't guarantee stacking order.
- **`scroll-margin-top` for the sticky nav:** once the navbar became `position: sticky`, clicking a nav link would scroll a section's heading directly underneath it. `scroll-margin-top` on each section tells the browser to stop short by the navbar's height, so anchor jumps land visibly below the nav instead of hidden behind it.
- **`IntersectionObserver` over a scroll-event listener:** the reveal-on-scroll animations use `IntersectionObserver` to detect when a section enters the viewport, rather than manually calculating scroll position on every `scroll` event — it's the modern, purpose-built browser API for this, and avoids the performance cost of firing a handler on every pixel of scroll.

## Running Locally

No build step or dependencies — just clone the repo and open `index.html` in a browser:

```
git clone https://github.com/jobrophoto/teacozy.git
cd teacozy
open index.html
```

## Author

Joe Boucher
