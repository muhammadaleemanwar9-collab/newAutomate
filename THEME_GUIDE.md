# Theme Guide - Light/Dark Mode

## Overview

This site now features a modern minimal UI with full light/dark mode support. The theme automatically adapts to user preferences and persists across sessions.

## Features Implemented

### 🎨 Design System

- **Color Palette**: Violet and Indigo gradients for a unique, modern look
- **Neutral Colors**: Clean whites and grays for light mode, deep blacks for dark mode
- **Smooth Transitions**: All theme changes animate smoothly (300ms duration)
- **Consistent Spacing**: Modern, breathable layouts with proper whitespace

### 🌓 Theme Toggle

- **Location**: Top-right corner of navigation bar (both desktop and mobile)
- **Icons**: Sun icon for light mode, Moon icon for dark mode
- **Persistence**: Theme choice saved to localStorage
- **System Preference**: Respects user's OS theme preference on first visit

### 🎯 Component Updates

#### Navigation

- Glassmorphism effect with backdrop blur
- Sticky positioning for always-visible theme toggle
- Responsive design with mobile menu support

#### Hero Section

- Large, bold typography with gradient text
- Animated background elements
- Trust signals with gradient numbers
- Responsive grid layout

#### Features Section

- Colorful gradient icons for each feature
- Hover effects with scale and shadow
- 3-column responsive grid

#### Pricing Section

- Clean card design with subtle borders
- Highlighted "Most Popular" plan
- Gradient pricing text
- Hover effects for better interactivity

#### Contact Form

- Modern input styling with focus states
- Success animation on form submission
- Info cards with rounded corners

#### Footer

- Organized link sections
- Social media icons with hover effects
- Bottom CTA with gradient background

## Technical Implementation

### Theme Context (`src/contexts/ThemeContext.tsx`)

- React Context API for global theme state
- localStorage integration for persistence
- System preference detection
- Hydration-safe implementation

### Theme Toggle Component (`src/components/ThemeToggle.tsx`)

- Client-side only rendering (prevents SSR issues)
- Smooth icon transitions
- Accessible with proper ARIA labels

### Tailwind Configuration

- Dark mode enabled with `class` strategy
- Custom color palette
- Animation utilities
- Extended theme with gradients

## Usage

### Toggling Theme

Click the sun/moon icon in the navigation bar to switch between light and dark modes.

### For Developers

#### Adding Theme-Aware Styles

```tsx
<div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
  Content
</div>
```

#### Using the Theme Context

```tsx
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
}
```

## Color Reference

### Light Mode

- Background: White (#FFFFFF)
- Text: Neutral-900 (#171717)
- Accents: Violet-600 (#9333EA), Indigo-600 (#4F46E5)
- Borders: Neutral-200 (#E5E5E5)

### Dark Mode

- Background: Neutral-950 (#0A0A0A)
- Text: Neutral-50 (#FAFAFA)
- Accents: Violet-400 (#A78BFA), Indigo-400 (#818CF8)
- Borders: Neutral-800 (#262626)

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-responsive on all devices

## Performance

- Minimal JavaScript overhead
- CSS-based transitions for smooth performance
- No layout shift during theme changes
- Optimized for Core Web Vitals
