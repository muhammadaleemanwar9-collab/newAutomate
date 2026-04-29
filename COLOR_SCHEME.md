# Color Scheme - Green Theme (#111D13)

## 🎨 Primary Color Palette

The site now uses a sophisticated green color scheme with **#111D13** as the dark mode base color.

### Color Scale

```
primary-50:  #f0fdf4  (Lightest - backgrounds)
primary-100: #dcfce7  (Very light - subtle backgrounds)
primary-200: #bbf7d0  (Light - hover states)
primary-300: #86efac  (Medium light)
primary-400: #4ade80  (Medium - accents in dark mode)
primary-500: #22c55e  (Base green - main accent)
primary-600: #16a34a  (Dark - buttons, links)
primary-700: #15803d  (Darker - hover states)
primary-800: #166534  (Very dark - borders in dark mode)
primary-900: #14532d  (Almost black)
primary-950: #111d13  (Darkest - dark mode background) ⭐
```

## 🌞 Light Mode Colors

- **Background**: White (#FFFFFF)
- **Text**: Neutral-900 (#171717)
- **Primary Accent**: Primary-600 (#16A34A)
- **Secondary Accent**: Primary-700 (#15803D)
- **Borders**: Neutral-200 (#E5E5E5)
- **Hover States**: Primary-50 (#F0FDF4)

## 🌙 Dark Mode Colors

- **Background**: Primary-950 (#111D13) ⭐
- **Text**: Neutral-50 (#FAFAFA)
- **Primary Accent**: Primary-400 (#4ADE80)
- **Secondary Accent**: Primary-500 (#22C55E)
- **Borders**: Primary-800 (#166534)
- **Card Backgrounds**: Primary-900/30 (with opacity)

## 🎯 Usage Examples

### Buttons

```tsx
// Primary button
<button className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600">
  Click Me
</button>

// Secondary button
<button className="border-2 border-primary-600 text-primary-700 dark:border-primary-500 dark:text-primary-400">
  Learn More
</button>
```

### Text with Gradient

```tsx
<h1 className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 dark:from-primary-400 dark:via-primary-300 dark:to-primary-500 bg-clip-text text-transparent">
  Gradient Text
</h1>
```

### Cards

```tsx
<div className="bg-white dark:bg-primary-900/30 border border-neutral-200 dark:border-primary-800/50">
  Card Content
</div>
```

## 🎨 Accent Colors

### Amber/Orange (for CTAs and highlights)

- accent-500: #f59e0b
- accent-600: #d97706

Used for special call-to-action buttons and important highlights.

## 🔄 Transition Effects

All color changes include smooth transitions:

```css
transition-colors duration-300
```

This ensures a pleasant experience when switching between light and dark modes.

## 📱 Responsive Design

The color scheme works beautifully across all devices and screen sizes, maintaining readability and visual hierarchy in both light and dark modes.
