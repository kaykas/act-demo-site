# A.C.T. Demo Site

A modern, theatrical website for the American Conservatory Theater (A.C.T.) in San Francisco. Built for a live demo to A.C.T.'s leadership team.

## Features

- **Dark Theatrical Design**: Custom color palette with gold accents (#c9a84c), dark backgrounds (#0a0a0a), and charcoal cards (#141414)
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for page transitions, hover effects, and scroll-triggered reveals
- **Complete Page Structure**:
  - Home page with hero, season preview, about section, and conservatory CTA
  - Full season page with all shows
  - Individual show pages (3 shows minimum)
  - Conservatory training programs page
  - Theater rentals page with contact form
  - About A.C.T. page with history and leadership
- **Performance Optimized**: Lazy loading, optimized images, and efficient bundle sizes

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom theme configuration
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vercel** for deployment

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Design System

### Colors
- Background: `#0a0a0a`
- Foreground: `#f5f0e8`
- Gold: `#c9a84c`
- Charcoal: `#141414`

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Components
- Navigation: Sticky dark nav with gold active indicators
- Show Cards: Charcoal cards with gold borders and hover effects
- Hero Sections: Full-viewport with gradient backgrounds and grain texture
- Footer: Multi-column with contact info and social links

## Deployment

The site is deployed on Vercel. Any push to the `main` branch triggers an automatic deployment.

## Quality Standards

This site meets the following quality standards:
- ✅ Looks like a real theater website, not a template
- ✅ Smooth animations that work on first load
- ✅ Navigates between pages without errors
- ✅ Fully responsive on mobile devices
- ✅ Fast loading times
- ✅ Proper metadata and OpenGraph tags

## License

Built for demonstration purposes.