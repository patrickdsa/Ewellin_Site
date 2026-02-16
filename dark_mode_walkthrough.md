# Walkthrough - Testing Dark Mode

This walkthrough guides you through testing the newly implemented dark mode features across the Ewellin Jordão website.

## Prerequisites
- Open the updated HTML files in your browser.
- Ensure JavaScript is enabled.

## Testing Steps

1.  **Open the Home Page**: Navigate to `home_page.html`.
2.  **Verify Initial Load**:
    - The theme should default to your system preference or previous setting.
    - Check for the Sun/Moon icon in the top right navigation bar.
3.  **Toggle Theme**: Click the Sun/Moon icon.
    - **Visual**: confirm the background changes to dark (`bg-zinc-950`) or light (`bg-white`).
    - **Text**: confirm headings turn light (`text-zinc-100`) and body text adjusts (`text-zinc-300`).
    - **Elements**: confirm glass cards and borders adjust seamlessly.
4.  **Navigate to Other Pages**:
    - Click links to `playup_page.html`, `espaco_page.html`, `sobre.html`, and `termos.html`.
    - **Persistence**: Confirm the theme remains consistent across page navigations without resetting.
5.  **Check Specific Elements**:
    - **Footer**: Ensure the footer background is dark (`bg-zinc-950`) and text is readable.
    - **Cards**: Verify glassmorphism effects in dark mode (e.g., in `playup_page.html` modules).
    - **Videos**: Ensure video overlays and controls are visible against the dark background.
6.  **Refresh Page**: Reload any page to confirm `localStorage` correctly remembers your choice.

## Expected Behavior
- **Seamless Transition**: No flashing of unstyled content.
- **Consistent Design**: All pages should share the same color palette and typography rules.
- **Functional Toggle**: The button should reliably switch themes and update the icon instantly.
