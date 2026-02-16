# Implementation Plan - Dark Mode Integration

This plan outlines the steps taken to implement a consistent dark mode across the Ewellin Jordão website.

## Objective
Enable a seamless dark mode experience on all pages (`playup_page.html`, `espaco_page.html`, `sobre.html`, `termos.html`) matching the implementation on `home_page.html` and `lancamento.html`.

## Implementation Steps

### 1. Configuration
- **Tailwind CSS**: Updated `tailwind.config` in script tags to include `darkMode: 'class'` and the custom `zinc` color palette (850, 900, 950) for dark backgrounds.

### 2. Global Styles
- **Body**: Added `dark:bg-zinc-950` and `dark:text-zinc-300` to the `<body>` tag.
- **Transitions**: Added `transition-colors duration-300` to `<body>` and major layout containers for smooth theme switching.
- **Backgrounds**: Updated fixed background containers to switch from white to `dark:bg-zinc-950`.

### 3. Navigation Bar
- **Container**: Added `dark:bg-zinc-900/70`, `dark:border-white/10`, and `dark:shadow-rose-900/10` for a glassmorphism effect in dark mode.
- **Links**: Updated interaction colors to `dark:text-zinc-300` and `dark:hover:text-rose-400`.
- **Toggle Button**: Inserted the sun/moon toggle button into the "Right Actions" area of the navbar.
- **Mobile Menu**: (If applicable) ensured consistency in mobile details.

### 4. Content Sections
- **Headings**: Mapped `text-zinc-700` to `dark:text-zinc-100` for high contrast.
- **Paragraphs**: Mapped `text-zinc-600` to `dark:text-zinc-300` and `text-zinc-500` to `dark:text-zinc-400` for readability.
- **Cards**:
    - Added `dark:bg-zinc-900/60` and `dark:border-zinc-700` to glass cards.
    - Adjusted shadow intensities to be subtler in dark mode.
- **Decorations**: Adjusted opacity or color of decorative, absolute-positioned elements (blobs, gradients) where necessary.

### 5. Footer
- **Background**: Set to `dark:bg-zinc-950`.
- **Borders**: Changed `border-rose-100` to `dark:border-zinc-800`.
- **Text**: Updated copyright and link colors to match the dark theme.

### 6. JavaScript Logic
- **Script**: Added the standard theme toggle script to the bottom of `<body>`.
    - Checks `localStorage` for 'color-theme'.
    - Checks system preference `(prefers-color-scheme: dark)`.
    - Toggles the `dark` class on `document.documentElement`.
    - Swaps the Sun/Moon icons visibility.
    - Persists user choice to `localStorage`.

## Verified Pages
- [x] `home_page.html` (Reference)
- [x] `lancamento.html` (Reference)
- [x] `playup_page.html`
- [x] `espaco_page.html`
- [x] `sobre.html`
- [x] `termos.html`
