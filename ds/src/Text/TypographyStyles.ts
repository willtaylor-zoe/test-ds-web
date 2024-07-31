import { css } from 'styled-components'

export const typographyStyles = {
  'fluid-display-1000': () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
    font-size: var(--font-size-fluid-display-1000);
    letter-spacing: calc(var(--font-size-fluid-heading-1000) * var(--letter-spacing-ratio-heading));
    line-height: var(--line-height-fluid-display-1000);
    margin: 0;
    em {
      font-family: var(--font-serif-italic), var(--font-fallback-serif);
    }
  `,

  'fluid-heading-900': () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
    font-size: var(--font-size-fluid-heading-900);
    letter-spacing: calc(var(--font-size-fluid-heading-900) * var(--letter-spacing-ratio-heading));
    line-height: var(--line-height-fluid-heading-900);
    margin: 0;
    em {
      font-family: var(--font-serif-italic), var(--font-fallback-serif);
    }
  `,

  'fluid-heading-800': () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
    font-size: var(--font-size-fluid-heading-800);
    letter-spacing: calc(var(--font-size-fluid-heading-800) * var(--letter-spacing-ratio-heading));
    line-height: var(--line-height-fluid-heading-800);
    margin: 0;
    em {
      font-family: var(--font-serif-italic), var(--font-fallback-serif);
    }
  `,

  'fluid-heading-700': () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
    font-size: var(--font-size-fluid-heading-700);
    letter-spacing: calc(var(--font-size-fluid-heading-700) * var(--letter-spacing-ratio-heading));
    line-height: var(--line-height-fluid-heading-700);
    margin: 0;
    em {
      font-family: var(--font-serif-italic), var(--font-fallback-serif);
    }
  `,

  'fluid-heading-600': () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
    font-size: var(--font-size-fluid-heading-600);
    letter-spacing: calc(var(--font-size-fluid-heading-600) * var(--letter-spacing-ratio-heading));
    line-height: var(--line-height-fluid-heading-600);
    margin: 0;
    em {
      font-family: var(--font-serif-italic), var(--font-fallback-serif);
    }
  `,

  'fluid-heading-500': () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
    font-size: var(--font-size-fluid-heading-500);
    letter-spacing: calc(var(--font-size-fluid-heading-500) * var(--letter-spacing-ratio-heading));
    line-height: var(--line-height-fluid-heading-500);
    margin: 0;
    em {
      font-family: var(--font-serif-italic), var(--font-fallback-serif);
    }
  `,

  'fluid-heading-500alt': () => css`
    font-size: var(--font-size-fluid-heading-500);
    line-height: var(--line-height-fluid-heading-500-alt);
    font-family: var(--font-sans-serif-regular), var(--font-fallback-sans-serif);
    margin: 0;
  `,

  'fluid-paragraph-400': () => css`
    font-size: var(--font-size-fluid-paragraph-400);
    line-height: var(--line-height-fluid-paragraph-400);
    font-family: var(--font-sans-serif-regular), var(--font-fallback-sans-serif);
    margin: 0;
  `,

  'fluid-paragraph-300': () => css`
    font-size: var(--font-size-fluid-paragraph-300);
    line-height: var(--line-height-fluid-paragraph-300);
    font-family: var(--font-sans-serif-regular), var(--font-fallback-sans-serif);
    margin: 0;
  `,

  'fluid-paragraph-200': () => css`
    font-size: var(--font-size-fluid-paragraph-200);
    line-height: var(--line-height-fluid-paragraph-200);
    font-family: var(--font-sans-serif-regular), var(--font-fallback-sans-serif);
    margin: 0;
  `,

  'fluid-label-100': () => css`
    font-size: var(--font-size-fluid-label-100);
    line-height: var(--line-height-fluid-label-100);
    font-family: var(--font-sans-serif-regular), var(--font-fallback-sans-serif);
    margin: 0;
  `,
}

// Ideally wouldn't use the font name in the key
export const fontFamilies = {
  nantes: () => css`
    font-family: var(--font-serif), var(--font-fallback-serif);
  `,
  nantesItalic: () => css`
    font-family: var(--font-serif-italic), var(--font-fallback-serif);
  `,
  lotaLight: () => css`
    font-family: var(--font-sans-serif-light), var(--font-fallback-sans-serif);
  `,
  lotaRegular: () => css`
    font-family: var(--font-sans-serif-regular), var(--font-fallback-sans-serif);
  `,
  lotaSemiBold: () => css`
    font-family: var(--font-sans-serif-semibold), var(--font-fallback-sans-serif);
  `,
}
