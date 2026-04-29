# Automate - AI-Powered Business Profile Enhancement

Modern, scalable landing page for Automate - an intelligent automation platform that helps businesses enhance their profiles through smart customer interaction management.

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean, minimalist design with professional color scheme (Sky Blue & Dark Slate)
- **SEO Optimized**: Includes proper metadata, semantic HTML, and structured data
- **Performance**: Built with Next.js for optimal performance and fast page loads
- **Accessibility**: WCAG compliant markup and semantic HTML
- **Scalable Architecture**: Component-based structure for easy maintenance and scaling

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Optimized for Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global Tailwind styles
├── components/
│   ├── Navigation.tsx     # Navbar with subscription plans
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── Pricing.tsx        # Pricing plans (Silver, Gold, Diamond)
│   ├── CTA.tsx            # Contact form and call-to-action
│   └── Footer.tsx         # Footer with links and info
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Features Included

### Navigation
- Sticky navbar with logo
- Subscription tier buttons (Silver, Gold, Diamond)
- Navigation buttons (Leads, Features, Contact Us)
- Mobile-responsive hamburger menu

### Hero Section
- Eye-catching headline with gradient text
- Value proposition messaging
- Trust signals (customers, satisfaction rate)
- CTA buttons (Get Started, Watch Demo)
- Responsive grid layout

### Features Section
- 6 feature cards with icons
- Covers intelligent response system, reputation building, 24/7 availability, multi-channel support, analytics, and scalability
- Hover effects and transitions

### Pricing Section
- Three subscription tiers: Silver, Gold, Diamond
- Detailed feature lists per plan
- Highlighted "Most Popular" badge on Gold
- Responsive grid layout

### Contact Section
- Contact form with name, email, company, message fields
- Success state animation
- Additional contact information (email, response time, availability)

### Footer
- Company information
- Quick links (Product, Company, Legal)
- Social media links
- Copyright information
- CTA for free trial

## SEO Features

- Meta tags for title, description, keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile viewport configuration
- Accessibility attributes (alt text, aria-labels)

## Color Scheme

- **Primary**: Sky Blue (#0ea5e9, #0284c7, #0369a1)
- **Accent**: Amber (#f59e0b, #d97706)
- **Dark Background**: Slate (#0f172a, #1e293b)
- **Text**: White, Slate-300, Slate-400

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for images
- Optimized animations using CSS transitions
- Modern web standards compliance

## Deployment

Deploy to Vercel with a single click:

```bash
npm run build
# Push to GitHub and connect to Vercel
```

Or deploy to any Node.js hosting:

```bash
npm run build
npm start
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Copyright © 2024 Automate. All rights reserved.

## Support

For support, email support@automate.io or visit the contact form on the site.

