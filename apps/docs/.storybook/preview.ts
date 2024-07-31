import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyles } from '@zoe/ui'

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
