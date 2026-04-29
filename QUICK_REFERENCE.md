# 🚀 QUICK REFERENCE GUIDE

## Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## File Structure

```
src/
├── app/
│   ├── layout.tsx      → Root layout with SEO
│   ├── page.tsx        → Home page
│   └── globals.css     → Global styles
└── components/
    ├── Navigation.tsx  → Navbar (Silver, Gold, Diamond)
    ├── Hero.tsx        → Hero section
    ├── Features.tsx    → 6 features
    ├── Pricing.tsx     → 3 pricing tiers
    ├── CTA.tsx         → Contact form
    └── Footer.tsx      → Footer
```

## Key Files to Edit

| File | Edit to... |
|------|-----------|
| `src/components/Navigation.tsx` | Change company name, logo |
| `src/components/Hero.tsx` | Update headline, description |
| `src/components/Pricing.tsx` | Modify prices, features |
| `src/components/Features.tsx` | Update features list |
| `src/components/CTA.tsx` | Change email, contact info |
| `src/components/Footer.tsx` | Update company info, links |
| `tailwind.config.ts` | Change colors |
| `src/app/layout.tsx` | Update SEO meta tags |

## Color Palette

```
Primary Blue:     #0ea5e9, #0284c7, #0369a1
Accent Gold:      #f59e0b
Dark Background:  #0f172a, #1e293b
Text Gray:        #e2e8f0 (light), #64748b (medium), #475569 (dark)
```

## CSS Classes

```
.btn-primary       → Blue gradient button
.btn-secondary     → Border button
.btn-accent        → Amber button
.card              → Glassmorphism card
.section-title     → Large heading
.section-subtitle  → Subtitle text
```

## Features Included

✅ Navigation (Sticky navbar with 3 subscription tiers)
✅ Hero (Headline, CTA, trust signals)
✅ Features (6 cards with smart response system)
✅ Pricing (Silver $29, Gold $79, Diamond $199)
✅ Contact Form (Name, email, company, message)
✅ Footer (Links, social, CTA)
✅ Mobile Responsive
✅ SEO Optimized
✅ Accessibility Ready
✅ TypeScript

## Deployment

Quick deploy options:
1. **Vercel** (recommended) - Push to GitHub → Connect to Vercel
2. **Netlify** - Same as Vercel
3. **Docker** - `docker build -t automate . && docker run -p 3000:3000 automate`

See `DEPLOYMENT.md` for detailed instructions.

## Documentation

- `README.md` - Full project documentation
- `SETUP.md` - Installation and quick start
- `FEATURES.md` - Detailed features and architecture
- `DEPLOYMENT.md` - Deployment guides
- `DELIVERY_SUMMARY.md` - Project summary

## Important Notes

- Node.js 18+ required
- No database setup needed
- Works offline (static site)
- Can be deployed anywhere
- All metadata in `src/app/layout.tsx`
- Contact form currently client-side only (add backend for emails)

## Useful Links

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs

---

**Ready to deploy? Follow the 3 simple steps in SETUP.md!** 🎉
