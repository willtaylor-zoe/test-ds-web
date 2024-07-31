import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { GlobalStyles } from '@willtaylor-zoe/ds'

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
