# Global Styling System

This document describes the comprehensive styling system that allows you to make site-wide style changes from a centralized configuration. The styling system is built on **Tailwind CSS** with custom design tokens and global component classes.

## Design Philosophy

The design system is built on principles of:

- **Consistency** - Unified visual language across all components
- **Accessibility** - WCAG 2.1 AA compliant color contrasts and typography
- **Responsiveness** - Mobile-first design that works on all devices
- **Performance** - Optimized assets and efficient CSS
- **Maintainability** - Centralized design tokens for easy updates

## Architecture Overview

The styling system consists of three main files:

1. **`tailwind.config.js`** - Design tokens (colors, spacing, typography, breakpoints, shadows, etc.)
2. **`src/app.css`** - Global component classes, CSS variables, and utility classes
3. **`src/fonts.css`** - Custom font face declarations (IBM Plex Mono, Playfair Display)

All design tokens are available in both Tailwind classes and CSS variables, providing flexibility for different use cases.

## Quick Decision Guide

**When to use what?**

1. **Global Component Classes** (`.btn`, `.card`, `.section`, `.container`) → For reusable, consistent components
2. **Tailwind Utilities** (`flex`, `gap-4`, `p-6`, `bg-primary`) → For layout, spacing, simple styling
3. **Component-Scoped CSS** → For complex animations, unique layouts, component-specific needs
4. **CSS Variables** (`var(--color-primary)`) → For dynamic theming, runtime changes

**Decision Framework:**

```
1. Does it match a global component class? → Use global class
   (e.g., .btn, .card, .section, .container)

2. Is it a simple layout/spacing pattern? → Use Tailwind utilities
   (e.g., flex, grid, padding, margin, gap)

3. Is it a one-off style? → Use Tailwind utilities
   (e.g., bg-primary, text-lg, p-4)

4. Is it a complex/unique pattern? → Use component-scoped CSS
   (e.g., complex animations, unique layouts, component-specific needs)

5. Is it a reusable pattern across multiple components? → Create global class
   (e.g., .event-card, .project-grid)
```

## Quick Start

### Making Global Style Changes

**To change colors site-wide:**

- Edit `tailwind.config.js` → `theme.extend.colors`
- Or edit `src/app.css` → `:root` CSS variables
- Both must be updated to keep them in sync

**To change button styles site-wide:**

- Edit `src/app.css` → `@layer components` → `.btn-primary`, `.btn-secondary`, etc.

**To change container widths:**

- Edit `src/app.css` → `@layer components` → `.container`, `.container-narrow`, `.container-wide`

**To change typography:**

- Edit `tailwind.config.js` → `theme.extend.fontSize` and `fontFamily`
- Or edit `src/app.css` → `:root` CSS variables

**To change breakpoints:**

- Edit `tailwind.config.js` → `theme.extend.screens`
- See [BREAKPOINTS.md](./BREAKPOINTS.md) for detailed breakpoint usage

## Design Tokens

### Colors

All colors are defined in both `tailwind.config.js` and as CSS variables in `app.css`:

**Primary Colors:**

- `primary` - Main brand color (#4a9eff)
- `primary-dark` - Darker variant (#0066cc)
- `primary-light` - Lighter variant (#6bb0ff)

**Secondary Colors:**

- `secondary` - Supporting color (#6c757d)
- `secondary-dark` - Darker variant (#5a6268)
- `secondary-light` - Lighter variant (#868e96)

**Semantic Colors:**

- `success` - Success states (#51cf66)
- `warning` - Warning states (#ffd43b)
- `error` - Error states (#ff6b6b)
- `accent` - Accent color (#ff6b6b)

**Neutral Colors:**

- `background.light` - White (#ffffff)
- `background.light-alt` - Off-white (#f8f8f8)
- `background.DEFAULT` - Dark mode background (#121212)
- `text.dark` - Primary text on light backgrounds (#333333)
- `text.DEFAULT` - Primary text on dark backgrounds (#e0e0e0)
- `text.muted` - Muted/secondary text (#6c757d)
- `border.light` - Borders on light backgrounds (#e0e0e0)

**Color Usage Guidelines:**

1. **Primary Actions**: Use `primary` color for buttons, links, and call-to-action elements
2. **Secondary Actions**: Use `secondary` color for less important actions
3. **Text Contrast**: Ensure minimum 4.5:1 contrast ratio for body text, 3:1 for large text
4. **Semantic Meaning**: Use semantic colors appropriately (success for success, error for errors)
5. **Consistency**: Use the same color for the same purpose throughout the site
6. **Avoid Hard-coded Colors**: Always use design tokens instead of hex values

**Usage:**

```svelte
<!-- Using Tailwind classes -->
<div class="bg-primary text-white">Content</div>
<div class="bg-success text-white">Success message</div>

<!-- Using CSS variables -->
<div style="background-color: var(--color-primary)">Content</div>
```

### Typography

**Font Families:**

The site uses a system font stack for body text:

- Primary: System fonts (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, etc.)
- Custom fonts available: `IBM Plex Mono` (monospace) and `Playfair Display` (display serif)
- See [Fonts](#fonts) section for custom font usage

**Type Scale:**

| Element   | Size            | Line Height | Weight | Usage                |
| --------- | --------------- | ----------- | ------ | -------------------- |
| Heading 1 | 3rem (48px)     | 1.2         | 700    | Main page titles     |
| Heading 2 | 2.5rem (40px)   | 1.3         | 600    | Section titles       |
| Heading 3 | 2rem (32px)     | 1.4         | 600    | Subsection titles    |
| Heading 4 | 1.5rem (24px)   | 1.4         | 600    | Card titles          |
| Heading 5 | 1.25rem (20px)  | 1.5         | 600    | Small headings       |
| Heading 6 | 1rem (16px)     | 1.5         | 600    | Smallest headings    |
| Lead      | 1.25rem (20px)  | 1.75        | 400    | Lead paragraphs      |
| Body      | 1rem (16px)     | 1.75        | 400    | Body text            |
| Small     | 0.875rem (14px) | 1.5         | 400    | Small text, captions |

**Typography Guidelines:**

1. **Hierarchy**: Use heading sizes to establish clear visual hierarchy
2. **Line Length**: Keep body text between 45-75 characters per line for readability
3. **Line Height**: Use appropriate line heights (1.75 for body, 1.3-1.5 for headings)
4. **Responsive**: Typography scales down on mobile devices
5. **Contrast**: Ensure sufficient contrast between text and background
6. **Font Size**: Minimum 16px for body text

**Usage:**

```svelte
<h1 class="heading-1">Main Title</h1>
<h2 class="heading-2">Section Title</h2>
<p class="text-lead">Lead paragraph with larger text</p>
<p class="text-muted">Muted secondary text</p>
```

### Spacing

**Section Spacing:**

- `--spacing-section` - Standard section padding (4rem)
- `--spacing-section-sm` - Small section padding (2rem)
- `--spacing-section-lg` - Large section padding (6rem)

**Container Padding:**

- `--spacing-container-padding` - Standard container padding (2rem)
- `--spacing-container-padding-sm` - Small container padding (1rem)

**Component Spacing:**

- Uses Tailwind's spacing scale (0.25rem increments)
- Common values: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

**Spacing Guidelines:**

1. **Consistency**: Use the spacing scale consistently across components
2. **Visual Rhythm**: Maintain consistent spacing between related elements
3. **Responsive**: Reduce spacing on mobile devices
4. **Whitespace**: Don't be afraid of whitespace - it improves readability

### Breakpoints

Standardized breakpoints are defined in `tailwind.config.js`. For detailed breakpoint usage, responsive patterns, and best practices, see **[BREAKPOINTS.md](./BREAKPOINTS.md)**.

**Quick Reference:**

- `xs`: 480px - Small mobile devices
- `sm`: 640px - Large mobile devices
- `md`: 768px - Tablets (primary mobile breakpoint)
- `tablet`: 968px - Large tablets
- `lg`: 1024px - Small laptops/desktops
- `xl`: 1280px - Large desktops
- `2xl`: 1536px - Extra large desktops

**Usage:**

```svelte
<div class="text-base md:text-lg xl:text-xl">Responsive text size</div>
```

### Shadows & Elevation

**Shadow Levels:**

- `--shadow-sm` - Subtle elevation
- `--shadow-md` - Standard elevation
- `--shadow-lg` - Prominent elevation
- `--shadow-xl` - Maximum elevation
- `--shadow-card` - Card default shadow
- `--shadow-card-hover` - Card hover state

**Elevation Guidelines:**

1. **Hierarchy**: Use shadows to establish visual hierarchy
2. **Hover States**: Increase shadow on hover for interactive elements
3. **Consistency**: Use the same shadow level for similar elements
4. **Subtlety**: Keep shadows subtle for modern appearance

### Border Radius

**Radius Values:**

- `--radius-card`: 8px - Cards, images, containers
- `--radius-button`: 4px - Buttons, inputs
- `--radius-input`: 8px - Form inputs, textareas

**Border Radius Guidelines:**

1. **Consistency**: Use consistent border radius for similar elements
2. **Modern**: Slightly rounded corners for modern appearance
3. **Accessibility**: Don't make corners too rounded (affects readability)

### Transitions & Animations

**Transition Durations:**

- `--transition-fast`: 150ms - Quick interactions
- `--transition-base`: 300ms - Standard transitions
- `--transition-slow`: 500ms - Deliberate animations

**Transition Easing:**

- Default: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural motion

**Animation Guidelines:**

1. **Purpose**: Use animations to provide feedback, not decoration
2. **Performance**: Keep animations smooth (60fps)
3. **Accessibility**: Respect `prefers-reduced-motion` media query
4. **Consistency**: Use consistent timing and easing

## Global Component Classes

### Form & Input Classes

**`.input`**

- Standardized input field styling
- Includes focus states with primary color
- Responsive padding and border radius

**`.textarea`**

- Standardized textarea styling
- Same styling as input with vertical resize
- Minimum height for better UX

**`.label`**

- Standardized label styling
- Proper spacing and typography

**Usage:**

```svelte
<label for="email" class="label">Email</label>
<input type="email" id="email" class="input" placeholder="your@email.com" />
<textarea id="message" class="textarea" rows="5"></textarea>
```

### Link Classes

**`.link`**

- Primary link styling with hover effects
- Underline on hover

**`.link-muted`**

- Muted link styling for secondary links

**Usage:**

```svelte
<a href="/about" class="link">Learn More</a>
<a href="/contact" class="link-muted">Contact Us</a>
```

### Grid Utility Classes

**`.grid-auto-fit`**

- Auto-fit grid with minimum 280px columns
- Responsive: collapses to 1 column on mobile

**`.grid-auto-fill`**

- Auto-fill grid with minimum 280px columns
- Responsive: collapses to 1 column on mobile

**`.grid-2`, `.grid-3`, `.grid-4`**

- Fixed column grids (2, 3, or 4 columns)
- Responsive: 2 columns on tablet, 1 column on mobile

**Usage:**

```svelte
<div class="grid-auto-fit">
	<!-- Auto-fit grid items -->
</div>

<div class="grid-3">
	<!-- 3-column grid -->
</div>
```

### Image Classes

**`.img-responsive`**

- Responsive image (100% width, auto height)

**`.img-rounded`**

- Rounded corners using card radius

**`.img-shadow`**

- Card shadow for images

**`.img-shadow-lg`**

- Large shadow for images

**Usage:**

```svelte
<img src="/image.jpg" alt="Image" class="img-responsive img-rounded img-shadow" />
```

### Flex Utility Classes

**`.flex-center`**

- Flex container with centered content

**`.flex-between`**

- Flex container with space-between

**`.flex-start`**, **`.flex-end`**

- Flex containers with start/end alignment

**`.flex-col`**

- Flex column direction

**`.flex-wrap`**

- Flex wrap enabled

**`.flex-gap`**, **`.flex-gap-sm`**, **`.flex-gap-lg`**

- Flex gap utilities (1rem, 0.5rem, 2rem)

**Usage:**

```svelte
<div class="flex-center gap-4">
	<!-- Centered flex items -->
</div>

<div class="flex-between flex-wrap">
	<!-- Space-between with wrap -->
</div>
```

### Text Utility Classes

**`.text-center`**, **`.text-left`**, **`.text-right`**

- Text alignment utilities

**`.text-uppercase`**

- Uppercase text with letter spacing

**`.text-capitalize`**

- Capitalize text

**Usage:**

```svelte
<p class="text-center text-uppercase">Centered Uppercase Text</p>
```

### Spacing Utility Classes

**Margin Bottom:**

- `.mb-0`, `.mb-1`, `.mb-2`, `.mb-3`, `.mb-4` (0, 0.5rem, 1rem, 1.5rem, 2rem)

**Margin Top:**

- `.mt-0`, `.mt-1`, `.mt-2`, `.mt-3`, `.mt-4` (0, 0.5rem, 1rem, 1.5rem, 2rem)

**Usage:**

```svelte
<div class="mb-4">Content with bottom margin</div>
```

### Border Utility Classes

**`.border-top`**, **`.border-bottom`**, **`.border-y`**

- Border utilities using light border color

**Usage:**

```svelte
<section class="section border-y">Section with top and bottom borders</section>
```

### Background Utility Classes

**`.bg-white`**

- White background

**`.bg-light`**

- Light gray background

**`.bg-dark`**

- Dark background with light text

**Usage:**

```svelte
<div class="bg-light">Light background</div>
```

### Position & Z-index Utilities

**Position:**

- `.relative`, `.absolute`, `.fixed`

**Z-index:**

- `.z-0`, `.z-1`, `.z-2`, `.z-10`, `.z-50`, `.z-100`

**Usage:**

```svelte
<div class="relative z-2">Positioned element</div>
```

### Container Classes

**`.container`**

- Max-width: 1200px
- Centered with auto margins
- Responsive padding

**`.container-narrow`**

- Max-width: 800px
- For narrower content areas

**`.container-wide`**

- Max-width: 1400px
- For wider content areas

**Usage:**

```svelte
<div class="container">
	<!-- Content -->
</div>
```

### Button Classes

**Base Button (`.btn`)**

- Base styles for all buttons
- Includes padding, border-radius, transitions

**Button Variants:**

- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-outline` - Outline style button
- `.btn-ghost` - Transparent/ghost button

**Button States:**

- Default
- Hover (lifts slightly, shadow increases)
- Active (returns to default position)
- Disabled (reduced opacity, no interaction)

**Usage:**

```svelte
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
<a href="#" class="btn btn-primary">Link as Button</a>
```

**To change all button styles globally:**
Edit `src/app.css` → `@layer components` → `.btn-primary`, `.btn-secondary`, etc.

### Card Classes

**`.card`**

- Base card styles with padding, border-radius, shadow
- White background

**`.card-hover`**

- Adds hover effects (lift and shadow increase)

**Card Features:**

- White background
- Rounded corners (8px)
- Subtle shadow
- Padding (2rem)
- Optional hover effect (lift and shadow increase)

**Usage:**

```svelte
<div class="card">
	<!-- Card content -->
</div>

<div class="card card-hover">
	<!-- Interactive card -->
</div>
```

**To change all card styles globally:**
Edit `src/app.css` → `@layer components` → `.card`

### Section Classes

**`.section`**

- Standard section spacing (4rem top/bottom padding)

**`.section-sm`**

- Small section spacing (2rem)

**`.section-lg`**

- Large section spacing (6rem)

**`.section-header`**

- Centered section header with title and description
- Includes responsive typography

**`.section-title`**

- Standardized section title
- Centered, responsive

**Usage:**

```svelte
<section class="section">
	<div class="section-header">
		<h2>Section Title</h2>
		<p>Section description</p>
	</div>
	<!-- Content -->
</section>

<!-- Or use section-title for simpler headers -->
<section class="section">
	<h2 class="section-title">Section Title</h2>
	<!-- Content -->
</section>
```

### Typography Classes

**Heading Classes:**

- `.heading-1` through `.heading-6`
- Responsive by default
- Proper line heights and font weights

**Text Utility Classes:**

- `.text-lead` - Lead paragraph text (larger)
- `.text-muted` - Muted/secondary text color

**Usage:**

```svelte
<h1 class="heading-1">Main Heading</h1>
<h2 class="heading-2">Subheading</h2>
<p class="text-lead">Important lead text</p>
<p class="text-muted">Less important text</p>
```

## Dark Mode

The site has dark mode support configured in Tailwind (`darkMode: 'class'`), but the current implementation uses a light theme by default. The color system includes both light and dark variants:

- Background colors: `background.light` (white) and `background.DEFAULT` (dark)
- Text colors: `text.dark` (for light backgrounds) and `text.DEFAULT` (for dark backgrounds)

**To enable dark mode:**

1. Add the `dark` class to the root element
2. Update component styles to use dark mode variants
3. Use Tailwind's `dark:` prefix for dark mode styles

**Example:**

```svelte
<div class="bg-white dark:bg-background text-text-dark dark:text-text">
	Content that adapts to theme
</div>
```

## Fonts

### Custom Fonts

The project includes two custom font families:

1. **IBM Plex Mono** - Monospace font for code and technical content
   - Available weights: 100-700 (Thin to Bold)
   - Available styles: Normal and Italic
   - Location: `src/lib/assets/fonts/IBMPlexMono-*.ttf`

2. **Playfair Display** - Variable font for display/heading text
   - Variable weight: 400-900
   - Available styles: Normal and Italic
   - Location: `src/lib/assets/fonts/PlayfairDisplay-*.ttf`

**Using Custom Fonts:**

```svelte
<code class="monospace">Code example</code>
<h1 class="display-font">Elegant Heading</h1>

<style>
	.monospace {
		font-family: 'IBM Plex Mono', monospace;
	}

	.display-font {
		font-family: 'Playfair Display', serif;
	}
</style>
```

**Note:** Font face declarations are in `src/fonts.css`. Ensure font files are properly referenced in the `@font-face` declarations.

### System Fonts

The default body font uses a system font stack for optimal performance:

- macOS/iOS: San Francisco (SF Pro)
- Windows: Segoe UI
- Android: Roboto
- Linux: Ubuntu, Cantarell, or system default

## CSS Variables

All design tokens are available as CSS variables for runtime theming and dynamic styling:

### Color Variables

```css
var(--color-primary)
var(--color-primary-dark)
var(--color-primary-light)
var(--color-secondary)
var(--color-success)
var(--color-warning)
var(--color-error)
var(--color-background)
var(--color-text)
var(--color-text-muted)
var(--color-border)
```

### Spacing Variables

```css
var(--spacing-section)
var(--spacing-section-sm)
var(--spacing-section-lg)
var(--spacing-container-padding)
```

### Typography Variables

```css
var(--font-size-heading-1)
var(--font-size-heading-2)
/* ... etc */
var(--line-height-heading)
var(--line-height-body)
var(--font-weight-normal)
var(--font-weight-medium)
var(--font-weight-semibold)
var(--font-weight-bold)
```

### Other Variables

```css
var(--radius-card)
var(--radius-button)
var(--shadow-card)
var(--shadow-card-hover)
var(--transition-base)
var(--transition-fast)
var(--transition-slow)
```

## Making Global Changes

### Example: Change Primary Color Site-Wide

**Option 1: Edit Tailwind Config**

```js
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#your-new-color',
    dark: '#darker-variant',
    // ...
  }
}
```

**Option 2: Edit CSS Variables**

```css
/* src/app.css */
:root {
	--color-primary: #your-new-color;
	--color-primary-dark: #darker-variant;
}
```

### Example: Change Button Styles Site-Wide

Edit `src/app.css`:

```css
@layer components {
	.btn-primary {
		background-color: var(--color-primary);
		/* Change any button property here */
		padding: 1rem 3rem; /* Larger buttons */
		border-radius: 8px; /* More rounded */
	}
}
```

### Example: Change Container Max-Width

Edit `src/app.css`:

```css
@layer components {
	.container {
		max-width: 1400px; /* Wider containers */
	}
}
```

## Best Practices

### 1. Use Global Classes First

Always use global classes when available. Don't recreate `.container`, `.btn-primary`, `.card`, etc.

```svelte
<!-- ✅ Good -->
<button class="btn btn-primary">Click me</button>

<!-- ❌ Bad -->
<button class="custom-button">Click me</button>

<style>
	.custom-button {
		/* Recreating btn-primary */
	}
</style>
```

### 2. Use Tailwind Utilities for Simple Layouts

Don't write custom CSS for simple flex/grid layouts that Tailwind handles well.

```svelte
<!-- ✅ Good -->
<div class="flex items-center gap-4 p-6">One-off layout</div>

<!-- ❌ Bad -->
<style>
	.special-layout {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem;
	}
</style>
```

### 3. Replace Hard-coded Colors with Design Tokens

Never use hard-coded colors. Always use design tokens.

```css
/* ✅ Good */
.title {
	color: var(--color-text-dark);
	background: var(--color-background-light);
}

/* ❌ Bad */
.title {
	color: #333;
	background: white;
}
```

### 4. Use CSS Variables for Dynamic Theming

CSS variables allow runtime theme changes and are perfect for dynamic styling.

```svelte
<div style="background-color: var(--color-primary)">Dynamic background</div>
```

### 5. Keep Component Styles Minimal

Only add styles unique to the component. Use global classes for common patterns.

```svelte
<!-- ✅ Good -->
<div class="card">
	<h3 class="heading-4">Title</h3>
	<p>Content</p>
</div>

<style>
	/* Only component-specific styles */
	.card {
		/* Unique styling not available globally */
	}
</style>
```

### 6. Use Tailwind Utilities for One-Off Styles

Don't create new classes for single-use cases. Use Tailwind utilities instead.

```svelte
<!-- ✅ Good --><div class="flex items-center gap-4 p-6 bg-gray-100">One-off layout</div>
```

### 7. Standardize Breakpoint Usage

Use Tailwind breakpoints consistently. Avoid custom breakpoints unless necessary.

```svelte
<!-- ✅ Good -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	<!-- Uses standard breakpoints -->
</div>

<!-- ❌ Bad -->
<style>
	@media (max-width: 600px) {
		/* Custom breakpoint not in config */
	}
</style>
```

### 8. Test Responsive Behavior

Global classes are responsive, but always verify on different screen sizes. Use browser dev tools to test breakpoints.

### 9. Maintain Design Token Consistency

When adding new colors or spacing values:

- Add to both `tailwind.config.js` and `app.css` `:root`
- Use semantic names (e.g., `primary`, `success`, not `blue`, `green`)
- Follow the existing naming conventions

### 10. Use Semantic Color Names

Prefer semantic names over color names for better maintainability.

```svelte
<!-- ✅ Good -->
<div class="bg-primary text-white">Primary action</div>
<div class="bg-success text-white">Success message</div>

<!-- ❌ Bad -->
<div class="bg-blue-500 text-white">Primary action</div>
```

### 11. Leverage Component Classes

Use component classes (`.card`, `.btn`, `.section`) for consistent styling across the site.

### 12. Mobile-First Approach

Write styles for mobile first, then enhance for larger screens.

```css
/* ✅ Good - Mobile first */
.element {
	padding: 1rem;
}

@media (min-width: 768px) {
	.element {
		padding: 2rem;
	}
}

/* ❌ Bad - Desktop first */
.element {
	padding: 2rem;
}

@media (max-width: 767px) {
	.element {
		padding: 1rem;
	}
}
```

### 13. Use Tailwind's @apply Directive Strategically

Use `@apply` in global component classes to leverage Tailwind utilities.

```css
/* In app.css @layer components */
.event-card {
	@apply relative min-h-[500px] rounded-lg overflow-hidden;
	@apply flex items-end;
	@apply border-2 border-black;

	/* Custom properties or complex styles */
	--custom-prop: value;
}
```

## Component Organization

**Recommended Component Structure:**

```svelte
<script>
	// Component logic
</script>

<!-- Use global classes and Tailwind utilities in markup -->
<section class="section bg-white">
	<div class="container">
		<div class="flex flex-col md:flex-row gap-6">
			<!-- Content -->
		</div>
	</div>
</section>

<style>
	/* Only component-specific styles that can't be done with Tailwind */
	/* Use @apply for Tailwind utilities in CSS when needed */
	.component-specific {
		/* Complex animations, unique layouts, etc. */
	}

	/* Use Tailwind breakpoints */
	@media (max-width: 768px) {
		.component-specific {
			@apply p-4;
		}
	}
</style>
```

## Migration Guide

### For New Components

1. **Use global classes first:**

   ```svelte
   <div class="container">
   	<section class="section">
   		<div class="section-header">
   			<h2 class="heading-2">Title</h2>
   		</div>
   		<div class="card">
   			<!-- Content -->
   		</div>
   		<button class="btn btn-primary">Action</button>
   	</section>
   </div>
   ```

2. **Add component-specific styles only when needed:**

   ```svelte
   <style>
   	/* Only add styles that are unique to this component */
   	.my-component-specific {
   		/* Custom styles */
   	}
   </style>
   ```

3. **Use Tailwind utilities for one-off styles:**
   ```svelte
   <div class="flex items-center gap-4 p-6">
   	<!-- Use Tailwind for layout and spacing -->
   </div>
   ```

### For Existing Components

Components have been migrated to use global classes. If you need to override:

1. **Use component-scoped styles:**

   ```svelte
   <style>
   	/* This will override global .btn-primary for this component only */
   	:global(.btn-primary) {
   		background: custom-color;
   	}
   </style>
   ```

2. **Or use Tailwind utilities:**
   ```svelte
   <button class="btn btn-primary bg-custom-color"> Custom Button </button>
   ```

## Common Patterns & Recipes

### Hero Section

```svelte
<section class="section">
	<div class="container">
		<div class="section-header">
			<h1 class="heading-1">Hero Title</h1>
			<p class="text-lead text-muted">Hero description</p>
		</div>
	</div>
</section>
```

### Feature Grid

```svelte
<section class="section bg-light">
	<div class="container">
		<h2 class="section-title">Features</h2>
		<div class="grid-3">
			<div class="card card-hover">
				<h3 class="heading-4">Feature 1</h3>
				<p>Description</p>
				<button class="btn btn-primary">Learn More</button>
			</div>
			<!-- More cards -->
		</div>
	</div>
</section>
```

### Form Layout

```svelte
<form class="container-narrow">
	<label for="email" class="label">Email</label>
	<input type="email" id="email" class="input" placeholder="your@email.com" />

	<label for="message" class="label">Message</label>
	<textarea id="message" class="textarea" rows="5"></textarea>

	<button type="submit" class="btn btn-primary">Send</button>
</form>
```

### Responsive Image

```svelte
<img src="/image.webp" alt="Description" class="img-responsive img-rounded img-shadow" />
```

### Flex Layout

```svelte
<div class="flex-between flex-wrap flex-gap">
	<div>Left content</div>
	<div>Right content</div>
</div>
```

## Accessibility

### Color Contrast

- **Body Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 contrast ratio

### Typography

- **Font Size**: Minimum 16px for body text
- **Line Height**: Minimum 1.5 for body text
- **Line Length**: 45-75 characters for optimal readability

### Interactive Elements

- **Focus States**: Visible focus indicators
- **Touch Targets**: Minimum 44x44px
- **Keyboard Navigation**: All interactive elements keyboard accessible

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Provide alt text for images
- Use ARIA labels when needed

## Responsive Design

The site follows a **mobile-first** approach:

1. Styles are written for mobile by default
2. Media queries use `min-width` (Tailwind) or `max-width` (custom CSS) to progressively enhance for larger screens
3. Breakpoints are applied at component level for granular control
4. Tailwind utilities use `min-width` media queries (mobile-first)
5. Custom CSS may use `max-width` for specific overrides

For detailed breakpoint information, responsive patterns, and best practices, see **[BREAKPOINTS.md](./BREAKPOINTS.md)**.

## Troubleshooting

### Styles Not Applying

1. **Check Tailwind content paths**: Ensure your component is included in `tailwind.config.js` → `content`
2. **Verify class names**: Use exact class names from this documentation
3. **Check CSS specificity**: Component-scoped styles may override global classes
4. **Clear build cache**: Run `npm run build` to regenerate styles

### Colors Not Updating

1. **Update both locations**: Change colors in both `tailwind.config.js` and `app.css` `:root`
2. **Restart dev server**: Some changes require a restart
3. **Check for caching**: Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Responsive Styles Not Working

1. **Verify breakpoints**: Check that you're using the correct breakpoint values
2. **Check media query syntax**: Ensure proper `@media` syntax
3. **Test in dev tools**: Use browser responsive design mode

### Fonts Not Loading

1. **Check font paths**: Verify font file paths in `fonts.css`
2. **Verify font files exist**: Check `src/lib/assets/fonts/` directory
3. **Check font-family name**: Use exact font family name from `@font-face` declaration

## File Locations

- **Design Tokens**: `tailwind.config.js`
- **Global Classes & Variables**: `src/app.css`
- **Custom Fonts**: `src/fonts.css`
- **Font Assets**: `src/lib/assets/fonts/`
- **Component Styles**: Individual component `<style>` blocks
- **This Documentation**: `docs/STYLING.md`
- **Breakpoints Reference**: `docs/BREAKPOINTS.md`

## Quick Reference

| What to Change   | Where to Edit                              |
| ---------------- | ------------------------------------------ |
| Colors           | `tailwind.config.js` or `app.css` `:root`  |
| Button Styles    | `app.css` `@layer components` `.btn-*`     |
| Container Widths | `app.css` `@layer components` `.container` |
| Typography       | `tailwind.config.js` or `app.css` `:root`  |
| Spacing          | `tailwind.config.js` or `app.css` `:root`  |
| Shadows          | `tailwind.config.js` or `app.css` `:root`  |
| Breakpoints      | `tailwind.config.js`                       |
| Card Styles      | `app.css` `@layer components` `.card`      |
| Section Styles   | `app.css` `@layer components` `.section-*` |

## Related Documentation

- **[BREAKPOINTS.md](./BREAKPOINTS.md)** - Detailed breakpoint usage and responsive patterns
- **[TECHNICAL.md](./TECHNICAL.md)** - Technical architecture and build system
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development setup and workflow

---

**Remember**: Changes to `tailwind.config.js` and `app.css` affect the entire site. Test thoroughly before deploying!
