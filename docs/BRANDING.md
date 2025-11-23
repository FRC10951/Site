# Brand Guidelines

This document establishes comprehensive brand guideline policies for Team 10951 - Saigon South Dragons. These guidelines ensure consistency, professionalism, and technical excellence across all digital touchpoints.

## Table of Contents

- [Brand Identity](#brand-identity)
- [Color System](#color-system)
- [Typography](#typography)
- [Logo Usage](#logo-usage)
- [Spacing & Layout](#spacing--layout)
- [Image Treatment](#image-treatment)
- [Visual Style](#visual-style)
- [Component Standards](#component-standards)
- [Dark Mode](#dark-mode)
- [Accessibility](#accessibility)
- [Implementation Notes](#implementation-notes)

---

## Brand Identity

### Core Values

**Three Pillars:**
1. **Relentless** - Unwavering commitment to excellence and continuous improvement
2. **Technical** - Demonstrating high-level technical skill and precision
3. **Vision-driven** - Forward-thinking approach to robotics and innovation

### Brand Personality

- **Minimalistic but elegant** - Clean, uncluttered design that speaks to sophistication
- **High technical skill** - Components and design demonstrate engineering excellence
- **Professional and persuasive** - Design that builds trust and attracts sponsors
- **Impact-focused** - Every element showcases the team's achievements and potential

### Target Audience

**Primary:**
- Sponsors and potential sponsors
- Judges evaluating impact
- Students seeking resources

**Secondary:**
- Parents and community members
- Other robotics teams
- Educational institutions

### Brand Voice

- **Technical and persuasive** - Communicates expertise while compelling action
- **Professional** - Maintains credibility and authority
- **Impact-oriented** - Emphasizes results, achievements, and value

---

## Color System

### Primary Colors

**Primary Color**
- **Hex:** `#0640aa`
- **RGB:** `rgb(6, 64, 170)`
- **Usage:** Main brand color for primary actions, links, CTAs, and key elements
- **Purpose:** Establishes brand recognition and trust

**Primary Dark**
- **Hex:** `#042d7a` (derived from primary)
- **Usage:** Hover states, active states, darker variants

**Primary Light**
- **Hex:** `#0a5cd4` (derived from primary)
- **Usage:** Lighter variants, backgrounds, subtle highlights

### Secondary Colors

**Secondary Color**
- **Hex:** `#00b1eb`
- **RGB:** `rgb(0, 177, 235)`
- **Usage:** Supporting elements, secondary actions, accents, highlights
- **Purpose:** Provides visual interest and complements primary color

**Secondary Dark**
- **Hex:** `#008bb8` (derived from secondary)
- **Usage:** Hover states, darker variants

**Secondary Light**
- **Hex:** `#33c1f0` (derived from secondary)
- **Usage:** Light backgrounds, subtle highlights

### Accent Color

**Accent Color**
- **Hex:** `#f6c846`
- **RGB:** `rgb(246, 200, 70)`
- **Usage:** Highlights, warnings, special callouts, emphasis
- **Purpose:** Draws attention to important information

**Accent Dark**
- **Hex:** `#d4a83a` (derived from accent)
- **Usage:** Hover states, darker variants

**Accent Light**
- **Hex:** `#f8d468` (derived from accent)
- **Usage:** Light backgrounds, subtle highlights

### Neutral Palette

**Strict Black & White Approach**

- **Pure Black:** `#000000` - Text, borders, strict elements
- **Pure White:** `#ffffff` - Backgrounds, cards, contrast
- **No gray scale** - Maintains strict, cut-through aesthetic

**Semantic Colors**

- **Success:** `#51cf66` - Success states, confirmations
- **Warning:** `#ffd43b` - Warnings, cautions
- **Error:** `#ff6b6b` - Errors, critical messages

### Color Usage Guidelines

1. **Primary Actions:** Always use primary color (`#0640aa`)
2. **Secondary Actions:** Use secondary color (`#00b1eb`)
3. **Accent/Highlight:** Use accent color (`#f6c846`) sparingly for emphasis
4. **Neutrals:** Strict black/white only - no grays
5. **Contrast:** Ensure WCAG 2.1 AA compliance (4.5:1 for body text, 3:1 for large text)
6. **Consistency:** Use the same color for the same purpose throughout the site
7. **Dark Mode:** All colors must have appropriate dark mode variants

### Color Psychology

- **Primary Blue (`#0640aa`):** Trust, professionalism, stability, technology
- **Secondary Cyan (`#00b1eb`):** Innovation, clarity, precision, forward-thinking
- **Accent Gold (`#f6c846`):** Excellence, achievement, value, premium quality

---

## Typography

### Font Family

**Primary Font: Lulo Clean W01 One Bold**
- **Font Name:** `lulo-clean-w01-one-bold`
- **Usage:** All text elements (headings, body, UI elements)
- **Style:** Modern, clean, formal, bold, dynamic
- **Note:** Font file must be added to the project. See [Implementation Notes](#implementation-notes)

**Font Stack (Fallback)**
```css
font-family: 'lulo-clean-w01-one-bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typography Scale

**Headings**

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| Heading 1 | 3rem (48px) | 1.2 | Bold (700) | Main page titles, hero headings |
| Heading 2 | 2.5rem (40px) | 1.3 | Bold (700) | Section titles |
| Heading 3 | 2rem (32px) | 1.4 | Bold (700) | Subsection titles |
| Heading 4 | 1.5rem (24px) | 1.4 | Bold (700) | Card titles, feature headings |
| Heading 5 | 1.25rem (20px) | 1.5 | Bold (700) | Small headings |
| Heading 6 | 1rem (16px) | 1.5 | Bold (700) | Smallest headings, labels |

**Body Text**

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| Lead | 1.25rem (20px) | 1.75 | Normal (400) | Lead paragraphs, introductions |
| Body | 1rem (16px) | 1.75 | Normal (400) | Body text, paragraphs |
| Small | 0.875rem (14px) | 1.5 | Normal (400) | Captions, fine print, metadata |

### Typography Guidelines

1. **Hierarchy:** Use heading sizes to establish clear visual hierarchy
2. **Line Length:** Keep body text between 45-75 characters per line for optimal readability
3. **Line Height:** Use appropriate line heights (1.75 for body, 1.2-1.5 for headings)
4. **Responsive:** Typography scales down on mobile devices
5. **Contrast:** Ensure sufficient contrast between text and background (minimum 4.5:1)
6. **Font Size:** Minimum 16px for body text
7. **Consistency:** Use the same font family throughout the entire site

### Typography Style

- **Modern and clean** - Contemporary, uncluttered
- **Formal** - Professional tone appropriate for sponsors
- **Bold** - Strong, confident presence
- **Dynamic** - Engaging, energetic (while maintaining professionalism)

---

## Logo Usage

### Primary Logo

**File:** `frc-logo.webp`
- **Location:** `/static/frc-logo.webp`
- **Usage:** Header, footer, main brand presence
- **Format:** WebP (optimized for web)

### Favicon

**File:** `frs-ssis-logo.ico`
- **Location:** `/public/frs-ssis-logo.ico` (or `/static/`)
- **Usage:** Browser tab icon, bookmarks
- **Format:** ICO (multi-resolution)

### Logo Placement

**Header**
- Position: Left side (desktop), top-left (mobile)
- Size: Appropriate fit based on header height
- Clear space: Minimum 1x logo height on all sides

**Footer**
- Position: Top of footer, centered or left-aligned
- Size: Appropriate fit based on footer design
- Clear space: Minimum 1x logo height on all sides

### Clear Space Rules

- **Minimum clear space:** 1x the height of the logo on all sides
- **Never:** Place text, images, or other elements within the clear space
- **Maintain:** Consistent clear space across all applications

### Logo Variations

**Current Status:** Single logo version available
- **Note:** Logo variations (horizontal, vertical, icon-only, full-color, monochrome) should be added in the future
- **Action Required:** Create and document logo variations for different use cases

### Logo Guidelines

1. **Proper Fit:** Logo should be sized appropriately for its context
2. **Clear Space:** Always maintain minimum clear space around logo
3. **Consistency:** Use the same logo file across all pages
4. **Quality:** Always use high-resolution versions (WebP format)
5. **Proportions:** Never distort, stretch, or alter logo proportions
6. **Background:** Ensure sufficient contrast with background

### Sponsor Logos

**Treatment:** Display as-is (no modifications)
- **Format:** Original colors and styling
- **Sizing:** Consistent sizing within sponsor carousel
- **Placement:** Sponsor carousel section
- **Filter:** Optional subtle grayscale (30%) that removes on hover

---

## Spacing & Layout

### Page Margins

**Desktop**
- **Standard:** `2rem` (32px)
- **Narrow:** `1rem` (16px) for specific use cases

**Mobile**
- **Standard:** `0.5rem` (8px)
- **Reduced:** Minimal margins for maximum content space

### Section Spacing

**Standard Section**
- **Padding:** `4rem` (64px) top and bottom
- **Usage:** Most content sections

**Small Section**
- **Padding:** `2rem` (32px) top and bottom
- **Usage:** Compact sections, tight layouts

**Large Section**
- **Padding:** `6rem` (96px) top and bottom
- **Usage:** Hero sections, major content areas, impact showcases

**Mobile Section Spacing**
- **Standard:** `2rem` (32px) top and bottom
- **Small:** `1rem` (16px) top and bottom
- **Large:** `4rem` (64px) top and bottom

### Container Widths

**Standard Container**
- **Max-width:** `1200px`
- **Usage:** Most content areas
- **Padding:** `2rem` desktop, `0.5rem` mobile

**Narrow Container**
- **Max-width:** `800px`
- **Usage:** Text-heavy content, articles, forms
- **Padding:** `2rem` desktop, `0.5rem` mobile

**Wide Container**
- **Max-width:** `1400px`
- **Usage:** Full-width content, galleries, showcases
- **Padding:** `2rem` desktop, `0.5rem` mobile

### Content Density

**Approach:** Spacious
- **Whitespace:** Generous use of whitespace for clarity
- **Breathing Room:** Adequate spacing between elements
- **Readability:** Prioritize readability over content density
- **Visual Hierarchy:** Use spacing to establish clear hierarchy

### Spacing Guidelines

1. **Consistency:** Use the spacing scale consistently across components
2. **Visual Rhythm:** Maintain consistent spacing between related elements
3. **Responsive:** Reduce spacing on mobile devices proportionally
4. **Whitespace:** Don't be afraid of whitespace - it improves readability and elegance
5. **Mobile-First:** Start with mobile spacing, then enhance for larger screens

---

## Image Treatment

### Default Image Filters

**Brightness**
- **Value:** `0.8` (80% brightness)
- **Purpose:** Subtle darkening for better text overlay and visual consistency
- **Usage:** Applied to all images by default

**Contrast**
- **Value:** `1.1` (110% contrast)
- **Purpose:** Enhanced definition and clarity
- **Usage:** Applied to all images by default

**Saturation**
- **Value:** `1.1` (110% saturation)
- **Purpose:** Slightly enhanced color vibrancy
- **Usage:** Applied to all images by default

**Note:** These values can be optimized based on testing and specific image requirements.

### Image Style

**Photography Focus:**
- **Posed team photos** - Professional team portraits
- **Robot photos** - Technical showcases, build documentation
- **Action shots** - Competition moments, team in action (secondary)

**Visual Treatment:**
- **Natural with enhancement** - Maintain authenticity while improving visual appeal
- **Professional** - Consistent, high-quality presentation
- **Technical** - Showcase engineering and precision

### Border Radius

**Images & Cards**
- **Value:** `8px`
- **Usage:** All images, cards, containers
- **Style:** Subtle rounding for modern appearance

**Buttons**
- **Value:** `4px`
- **Usage:** All buttons, inputs
- **Style:** Minimal rounding for professional look

**Inputs**
- **Value:** `8px`
- **Usage:** Form inputs, textareas
- **Style:** Consistent with cards

### Image Shadows

**Default Shadow**
- **Value:** `0 2px 8px rgba(0, 0, 0, 0.1)`
- **Usage:** Standard images, cards
- **Style:** Subtle elevation

**Large Shadow**
- **Value:** `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Usage:** Featured images, hero images
- **Style:** More prominent elevation

### Image Guidelines

1. **Consistency:** Apply same filters and treatments across all images
2. **Quality:** Always use high-resolution images (WebP format preferred)
3. **Optimization:** Compress images for web while maintaining quality
4. **Alt Text:** Always provide descriptive alt text for accessibility
5. **Responsive:** Images should be responsive and load appropriately
6. **Lazy Loading:** Use lazy loading for images below the fold

---

## Visual Style

### Overall Aesthetic

**Intersection of:**
- **Modern** - Contemporary design trends and techniques
- **Professional** - Credible, trustworthy, business-appropriate
- **Classic** - Timeless elements that won't date quickly
- **Tech-forward** - Cutting-edge, innovative, technical

### Design Principles

1. **Minimalistic but Elegant** - Clean, uncluttered, sophisticated
2. **Technical Excellence** - Components demonstrate high-level skill
3. **Impact Demonstration** - Every element showcases achievements
4. **Sponsor Attraction** - Design that builds trust and compels sponsorship
5. **Professional Persuasion** - Credible, authoritative, compelling

### Visual Elements

**Colors**
- **Preference:** Solid colors preferred
- **Avoid:** Excessive gradients (use sparingly if at all)
- **Approach:** Clean, bold color blocks

**Shadows**
- **Style:** Subtle, professional
- **Usage:** Elevation, depth, hierarchy
- **Avoid:** Heavy, dramatic shadows

**Borders**
- **Style:** Clean, minimal
- **Color:** Pure black or white (strict approach)
- **Width:** Thin (1-2px)

### Animation Style

**Approach:** Subtle and smooth
- **Duration:** 300ms standard, 150ms fast, 500ms slow
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural motion
- **Purpose:** Provide feedback, not decoration
- **Accessibility:** Respect `prefers-reduced-motion` media query

**Animation Guidelines:**
1. **Purposeful:** Every animation should serve a purpose
2. **Subtle:** Keep animations understated and professional
3. **Smooth:** Maintain 60fps performance
4. **Accessible:** Always respect user motion preferences

---

## Component Standards

### Buttons

**Style:** Keep current and standardize
- **Border Radius:** `4px`
- **Padding:** `0.75rem 2rem`
- **Font:** Lulo Clean W01 One Bold
- **Transitions:** Smooth, 300ms

**Button Variants:**
- **Primary:** Primary color background, white text
- **Secondary:** Secondary color background, white text
- **Outline:** Transparent background, primary color border and text
- **Ghost:** Transparent background, text only

**Button States:**
- **Default:** Standard appearance
- **Hover:** Slight lift (`translateY(-2px)`), increased shadow
- **Active:** Return to default position
- **Disabled:** Reduced opacity (60%), no interaction

### Cards

**Style:** Keep current and standardize
- **Background:** White (light mode), dark (dark mode)
- **Border Radius:** `8px`
- **Padding:** `2rem`
- **Shadow:** Subtle shadow (`0 2px 8px rgba(0, 0, 0, 0.1)`)
- **Hover:** Increased shadow, slight lift (`translateY(-4px)`)

**Card Guidelines:**
1. **Consistency:** Use same styling across all cards
2. **Spacing:** Maintain consistent padding and margins
3. **Shadows:** Use subtle shadows for elevation
4. **Hover States:** Provide clear feedback on interactive cards

### Forms

**Inputs**
- **Border Radius:** `8px`
- **Border:** 2px solid, light color
- **Focus:** Primary color border, subtle shadow
- **Padding:** `0.75rem 1rem`

**Labels**
- **Font:** Lulo Clean W01 One Bold
- **Size:** Small (14px)
- **Weight:** Medium (500)
- **Spacing:** `0.5rem` margin-bottom

### Icons

**Style:** Outline (recommended for minimalistic aesthetic)
- **Stroke Width:** 2px
- **Color:** Inherit from parent or use semantic colors
- **Size:** Consistent sizing within context

**Icon Guidelines:**
1. **Consistency:** Use same icon style throughout
2. **Size:** Maintain consistent sizing
3. **Color:** Use semantic colors appropriately
4. **Accessibility:** Provide proper ARIA labels

---

## Dark Mode

### Requirement

**Site must support dark mode** - Full dark mode implementation using Apple's Human Interface Guidelines (HIG) dark mode palette, merged with brand color guidelines.

### Apple Dark Mode Palette

The dark mode color scheme fully adheres to Apple's dark mode color palette, following their Human Interface Guidelines for dark appearances.

#### Color Palette

| Color | Hex | Role | Usage |
|-------|-----|------|-------|
| **Pure Black** | `#000000` | Primary Background (True Black) | OLED backgrounds, deepest UI layers, full-screen overlays, video playback |
| **Dark Elevated 1** | `#161618` | Primary Surface / Standard Background | Main app backgrounds, standard surfaces, lists, scroll views, cards, sections |
| **Dark Elevated 2** | `#212124` | Secondary Surface / Higher Elevation | Toolbars, navigation bars, sidebars, popovers, context menus, modals |
| **Pure White** | `#ffffff` | Primary Text / Glyphs / Highlights | High-emphasis text, system icons, key UI highlights, selected states |
| **Mid-Gray** | `#818181` | Secondary/Tertiary Text, Disabled States | Secondary text, captions, subtitles, placeholder text, disabled elements, dividers |

#### Background Hierarchy

**Primary Surface (`#161618` - Dark Elevated 1)**
- Main app backgrounds
- Standard surfaces behind scroll views, table views, lists
- Container backgrounds (cards, system windows)
- Sections and content areas
- Default background for most components

**Secondary Surface (`#212124` - Dark Elevated 2)**
- Toolbars and navigation bars
- Sidebars (e.g., macOS Finder sidebar)
- Components requiring elevation or separation:
  - Popovers
  - Context menus
  - Modals appearing above base backgrounds
- Elevated UI elements

**Pure Black (`#000000`)**
- Full-black backgrounds on devices with OLED displays
- Deepest layers of the UI where no elevation is intended
- Full-screen backgrounds (e.g., video playback, lock screen, mobile menu overlays)
- Maximum contrast for high-priority foreground elements

#### Text Hierarchy

**Primary Text (`#ffffff` - Pure White)**
- Primary text labels (High-emphasis)
- System icons and glyphs
- Key UI highlights (selected state indicators, high-contrast text)
- Interface elements requiring maximum readability
- All headings (h1-h6)
- Body text in dark mode

**Secondary/Tertiary Text (`#818181` - Mid-Gray)**
- Secondary text (captions, subtitles, metadata)
- Placeholder text
- Disabled icons, switches, and buttons
- Dividers, subtle separators
- Lower visual hierarchy content

### Color Adaptations

**Backgrounds**
- **Light Mode:** 
  - Pure white (`#ffffff`) for sections and cards
  - Light gray (`#f8f8f8`) for subtle backgrounds
- **Dark Mode:** 
  - Primary Surface (`#161618`) for sections, cards, and standard backgrounds
  - Secondary Surface (`#212124`) for toolbars, nav bars, and elevated components
  - Pure Black (`#000000`) for full-screen overlays and deepest layers

**Text**
- **Light Mode:** Pure black (`#000000`) for all text
- **Dark Mode:** 
  - Pure white (`#ffffff`) for primary text - **STANDARDIZED**
  - Mid-gray (`#818181`) for secondary/tertiary text and disabled states

**Borders**
- **Light Mode:** Black (`#000000`)
- **Dark Mode:** White (`#ffffff`) - **INVERTED**

**Primary Colors**
- **Light Mode:** Standard primary color (`#0640aa`)
- **Dark Mode:** Lighter variant (`#0a5cd4`) for better contrast on dark backgrounds

**Secondary Colors**
- **Light Mode:** Standard secondary color (`#00b1eb`)
- **Dark Mode:** Lighter variant (`#33c1f0`) for better visibility

**Accent Colors**
- **Light Mode:** Standard accent color (`#f6c846`)
- **Dark Mode:** Lighter variant (`#f8d468`) for visibility

### Component Inversion

**Sections**
- `.bg-white` → Primary Surface (`#161618`) with white text
- `.bg-light` → Primary Surface (`#161618`) with white text
- All section backgrounds use Apple Dark Elevated 1

**Navigation & Toolbars**
- Header navigation: Transparent (overlays content)
- Footer: Primary Surface (`#161618`)
- Mobile menu overlay: Pure Black (`#000000`) for full-screen effect
- Toolbars and elevated UI: Secondary Surface (`#212124`)

**Buttons**
- Primary/Secondary buttons maintain brand colors (adjusted for dark mode)
- Outline buttons: Transparent background, white border, white text
- Ghost buttons: Transparent background, white text, white hover background

**Cards**
- White cards → Primary Surface (`#161618`)
- Text: Always white (`#ffffff`) in dark mode
- Elevated cards: Secondary Surface (`#212124`) when needed

**Sponsors Carousel**
- Light gray background (`#f8f8f8`) → Primary Surface (`#161618`)
- Logo filters: Slightly brighter in dark mode for visibility
- Separator line: Black → White (inverted)

**Forms**
- Input backgrounds: White → Primary Surface (`#161618`)
- Input text: Black → White (`#ffffff`)
- Input borders: Black → White (`#ffffff`)
- Placeholder text: Mid-gray (`#818181`)

### Dark Mode Guidelines

1. **Full Support:** All components must have dark mode variants using Apple's palette
2. **Text Standardization:** Primary text must be white (`#ffffff`), secondary text uses mid-gray (`#818181`)
3. **Background Hierarchy:** Use appropriate elevation levels (Primary Surface, Secondary Surface, Pure Black)
4. **Contrast:** Maintain WCAG 2.1 AA compliance in dark mode
5. **Consistency:** Use same color relationships in both modes
6. **Apple HIG Compliance:** Follow Apple's Human Interface Guidelines for dark mode
7. **Toggle:** User preference toggle available in header, mobile menu, and footer
8. **System Preference:** Respect `prefers-color-scheme` media query on first visit
9. **Persistence:** User preference saved in localStorage
10. **Elevation:** Use Dark Elevated 2 (`#212124`) for components that need visual separation or elevation

---

## Accessibility

### Color Contrast

- **Body Text:** Minimum 4.5:1 contrast ratio
- **Large Text:** Minimum 3:1 contrast ratio
- **Interactive Elements:** Minimum 3:1 contrast ratio
- **Focus Indicators:** Clearly visible, high contrast

### Typography

- **Font Size:** Minimum 16px for body text
- **Line Height:** Minimum 1.5 for body text
- **Line Length:** 45-75 characters for optimal readability

### Interactive Elements

- **Focus States:** Visible focus indicators on all interactive elements
- **Touch Targets:** Minimum 44x44px for mobile
- **Keyboard Navigation:** All interactive elements keyboard accessible

### Semantic HTML

- **Headings:** Proper heading hierarchy (h1 → h2 → h3)
- **Landmarks:** Use semantic HTML (`<nav>`, `<main>`, `<article>`, etc.)
- **Alt Text:** Descriptive alt text for all images
- **ARIA Labels:** Use ARIA labels when needed

### Motion

- **Reduced Motion:** Respect `prefers-reduced-motion` media query
- **Animations:** Provide option to disable or reduce animations
- **Performance:** Maintain 60fps for smooth animations

---

## Implementation Notes

### Font Implementation

**Lulo Clean W01 One Bold**

1. **Obtain Font File:** Acquire `lulo-clean-w01-one-bold` font file(s)
2. **Font Formats:** Include WOFF2, WOFF, and TTF formats for maximum compatibility
3. **Font Location:** Place in `/src/lib/assets/fonts/`
4. **Font Face Declaration:** Add `@font-face` declarations to `src/fonts.css`
5. **Font Loading:** Use `font-display: swap` for optimal loading
6. **Fallback:** Maintain system font stack as fallback

**Example Font Face:**
```css
@font-face {
  font-family: 'lulo-clean-w01-one-bold';
  src: url('./lib/assets/fonts/lulo-clean-w01-one-bold.woff2') format('woff2'),
       url('./lib/assets/fonts/lulo-clean-w01-one-bold.woff') format('woff'),
       url('./lib/assets/fonts/lulo-clean-w01-one-bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Logo Implementation

**Primary Logo**
- **File:** `/static/frc-logo.webp`
- **Update Header:** Replace text logo with image logo
- **Update Footer:** Add logo to footer component
- **Clear Space:** Implement minimum clear space rules

**Favicon**
- **File:** `/public/frs-ssis-logo.ico` or `/static/frs-ssis-logo.ico`
- **Update HTML:** Reference in `src/app.html` `<link rel="icon">`

### Color Implementation

**Update Design Tokens**

1. **Tailwind Config:** Update `tailwind.config.js` with new colors
2. **CSS Variables:** Update `src/app.css` `:root` variables
3. **Dark Mode:** Add dark mode color variants

**Color Values:**
```javascript
primary: {
  DEFAULT: '#0640aa',
  dark: '#042d7a',
  light: '#0a5cd4',
},
secondary: {
  DEFAULT: '#00b1eb',
  dark: '#008bb8',
  light: '#33c1f0',
},
accent: {
  DEFAULT: '#f6c846',
  dark: '#d4a83a',
  light: '#f8d468',
},
```

### Spacing Implementation

**Mobile Margins**
- **Update:** Change mobile container padding from `1rem` to `0.5rem`
- **Location:** `src/app.css` container classes
- **Media Query:** Update `@media (max-width: 768px)` rules

### Image Treatment Implementation

**Default Filters**
- **Location:** Global image classes or component-specific
- **CSS:** Apply `filter: brightness(0.8) contrast(1.1) saturate(1.1);`
- **Optimization:** Test and adjust values as needed

### Dark Mode Implementation

1. **Tailwind Config:** Ensure `darkMode: 'class'` is set
2. **Color Variants:** Create dark mode color variants with proper inversion
3. **Text Standardization:** All text must be white (`#ffffff`) in dark mode
4. **Background Inversion:** Light backgrounds become dark, dark backgrounds become light
5. **Component Updates:** Add dark mode classes to all components
6. **Testing:** Test all components in both light and dark modes

**Implementation Checklist:**
- [x] Text color standardized to white in dark mode
- [x] Section backgrounds invert (bg-white → dark, bg-light → dark)
- [x] Button colors adjusted for dark mode visibility
- [x] Card backgrounds invert with white text
- [x] Border colors invert (black → white)
- [x] Sponsors carousel background inverts
- [x] Separator lines invert
- [x] Form inputs invert with white text
- [x] All headings and text elements use white in dark mode

### Component Standardization

1. **Buttons:** Review and standardize all button implementations
2. **Cards:** Ensure consistent card styling across all components
3. **Forms:** Standardize all form inputs and labels
4. **Icons:** Implement consistent icon style (outline recommended)

---

## Brand Compliance Checklist

When creating or updating components, ensure:

- [ ] Colors match brand palette (primary, secondary, accent)
- [ ] Typography uses Lulo Clean W01 One Bold
- [ ] Spacing follows brand guidelines (spacious, mobile 0.5rem)
- [ ] Images have default filters applied
- [ ] Border radius matches standards (8px cards, 4px buttons)
- [ ] Shadows are subtle and professional
- [ ] Dark mode is fully supported
- [ ] Accessibility standards are met
- [ ] Logo usage follows clear space rules
- [ ] Animation is subtle and smooth
- [ ] Overall aesthetic is minimalistic but elegant

---

## Related Documentation

- **[STYLING.md](./STYLING.md)** - Complete styling system and design tokens
- **[BREAKPOINTS.md](./BREAKPOINTS.md)** - Responsive design patterns
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development setup and workflow
- **[TECHNICAL.md](./TECHNICAL.md)** - Technical architecture

---

**Last Updated:** [Date to be filled]
**Version:** 1.0
**Maintained By:** Team 10951 - Saigon South Dragons

