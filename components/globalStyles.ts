import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'Nantes';
    src: url('/fonts/Nantes_Web_Book/NantesWeb-Book.woff2') format('woff2'),
      url('/fonts/Nantes_Web_Book/NantesWeb-Book.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family:'Nantes-Italic';
    src: url('/fonts/Nantes_Web_BookItalic/NantesWeb-BookItalic.woff2') format('woff2'),
      url('/fonts/Nantes_Web_BookItalic/NantesWeb-BookItalic.woff') format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family:'LotaGrotesqueAlt1-Light';
    src: url('/fonts/LotaGrotesqueAlt1Light/font.woff2') format('woff2'),
      url('/fonts/LotaGrotesqueAlt1Light/font.woff') format('woff');
  }
  @font-face {
    font-family:'LotaGrotesqueAlt1-Regular';
    src: url('/fonts/LotaGrotesqueAlt1Regular/font.woff2') format('woff2'),
      url('/fonts/LotaGrotesqueAlt1Regular/font.woff') format('woff');
  }
  @font-face {
    font-family:'LotaGrotesqueAlt1-SemiBold';
    src: url('/fonts/LotaGrotesqueAlt1SemiBold/font.woff2') format('woff2'),
      url('/fonts/LotaGrotesqueAlt1SemiBold/font.woff') format('woff');
    font-weight: 600;
  }

  ${normalize}

  * {
    box-sizing: border-box;
  }
  *, html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;

    --font-fallback-sans-serif: 'sans-serif';
    --font-fallback-serif: 'serif';
    --font-serif: 'Nantes';
    --font-serif-italic: 'Nantes-Italic';
    --font-sans-serif-light: 'LotaGrotesqueAlt1-Light';
    --font-sans-serif-regular: 'LotaGrotesqueAlt1-Regular';
    --font-sans-serif-semibold: 'LotaGrotesqueAlt1-SemiBold';

    font-size: 16px;

    --font-size-14: 0.875rem; // 14px
    --font-size-16: 1rem; // 16px
    --font-size-18: 1.125rem; // 18px
    --font-size-20: 1.25rem; // 20px
    --font-size-22: 1.375rem; // 22px
    --font-size-24: 1.5rem; // 24px
    --font-size-30: 1.875rem; // 30px
    --font-size-32: 2rem; // 32px
    --font-size-34: 2.125rem; // 34px
    --font-size-36: 2.25rem; // 36px
    --font-size-40: 2.5rem; // 40px
    --font-size-46: 2.875rem; // 46px
    --font-size-56: 3.5rem; // 56px
    --font-size-72: 4.5rem; // 72px

    --line-height-22: 1.375rem; // 22px
    --line-height-24: 1.5rem; // 24px
    --line-height-28: 1.75rem; // 28px
    --line-height-30: 1.875rem; // 30px
    --line-height-32: 2; // 32px

    --letter-spacing-ratio-heading: -0.02; // -2% of font size
    --line-height-ratio-heading: 1.05; // 105% of font size

    --font-size-fluid-label-100: var(--font-size-14);
    --line-height-fluid-label-100: var(--line-height-22);
    --font-size-fluid-paragraph-200: var(--font-size-16);
    --line-height-fluid-paragraph-200: var(--line-height-24);
    --font-size-fluid-paragraph-300: var(--font-size-18);
    --line-height-fluid-paragraph-300: var(--line-height-28);
    --font-size-fluid-paragraph-400: var(--font-size-20);
    --line-height-fluid-paragraph-400: var(--line-height-30);
    --font-size-fluid-heading-500: var(--font-size-24);
    --line-height-fluid-heading-500: calc(var(--font-size-fluid-heading-500) * var(--line-height-ratio-heading));
    --line-height-fluid-heading-500-alt: var(--line-height-30); // sans-serif font therefore doesn't follow line height ratio for headings
    --font-size-fluid-heading-600: var(--font-size-30);
    --line-height-fluid-heading-600: calc(var(--font-size-fluid-heading-600) * var(--line-height-ratio-heading));
    --font-size-fluid-heading-700: var(--font-size-36);
    --line-height-fluid-heading-700: calc(var(--font-size-fluid-heading-700) * var(--line-height-ratio-heading));
    --font-size-fluid-heading-800: var(--font-size-40);
    --line-height-fluid-heading-800: calc(var(--font-size-fluid-heading-800) * var(--line-height-ratio-heading));
    --font-size-fluid-heading-900: var(--font-size-46);
    --line-height-fluid-heading-900: calc(var(--font-size-fluid-heading-900) * var(--line-height-ratio-heading));
    --font-size-fluid-display-1000: var(--font-size-72);
    --line-height-fluid-display-1000: calc(var(--font-size-fluid-heading-1000) * var(--line-height-ratio-heading));

  }
`
