# Journey — Daniel Caesar Tribute

A minimalist, immersive web experience exploring the musical journey of Daniel Caesar — from Toronto indie artist to global soul phenomenon.

![Daniel Caesar Journey Screenshot](./public/images/hero.jpg)

## Live Demo

[View the experience →](https://your-deployment-url.com)

## Features

- **Smooth Scrolling Experience** — Fluid navigation through chapters using Framer Motion animations
- **Responsive Chapter Layouts** — Alternating image positions with parallax-like effects
- **Interactive Timeline** — Career milestones from 2014-2025 with scroll-triggered reveals
- **Visual Gallery** — Song artwork showcase with hover interactions
- **Dark Aesthetic** — Black-based design matching Daniel Caesar's artistic vibe
- **Mobile Optimized** — Fully responsive across all device sizes

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion |
| Icons | SVG Sprite |
| Linting | ESLint + Prettier |

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header navigation
│   ├── sections/        # Hero, Chapter, Timeline, Gallery, Vision, Footer
│   └── shared/          # Reusable UI components
├── data/
│   └── content.js       # All biographical content & copy
├── hooks/
│   ├── useInView.js     # Intersection Observer hook
│   └── useScrollY.js    # Scroll position tracking
├── styles/
│   ├── globals.css      # Tailwind directives + base styles
│   └── animations.css   # Custom keyframe animations
└── utils/
    ├── classNames.js    # Conditional class merging
    ├── constants.js     # App constants
    └── memoirVisual.js  # Visual effect utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/journey-v2.git
cd journey-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory.

## Content Sections

1. **Hero** — Introduction with Daniel Caesar portrait
2. **Chapter 1-5** — Biographical narrative with key milestones:
   - Toronto 2014: Beginnings
   - Freudian (2017): Breakthrough
   - Never Enough (2023): Evolution
   - Stage Moments: Live performances
   - Visual Style: Aesthetic journey
3. **Timeline** — Chronological career highlights
4. **Gallery** — Song artwork collection
5. **Vision** — Future outlook and legacy

## Design Decisions

- **Black Background** — Evokes concert atmosphere and album artwork aesthetic
- **Inter Font** — Clean, modern typography for readability
- **Gold/Orange Accents** — Warm tones reflecting soul/R&B genre
- **Minimal UI** — Content-first approach letting the story shine

## Performance

- Lazy-loaded images with `loading="lazy"`
- Optimized assets in WebP/AVIF formats
- CSS animations using `transform` for GPU acceleration
- ~90KB total bundle size (gzipped)

## Credits

- **Content** — Based on Daniel Caesar's real discography and career
- **Images** — Sourced from official releases and promotional materials
- **Built with** — React ecosystem and modern web standards

## License

MIT License — Feel free to use this as a template for your own artist tribute sites.

---

*This is a fan-made tribute project, not affiliated with Daniel Caesar or his record label.*
