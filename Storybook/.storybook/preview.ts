import type { Preview } from '@storybook/react';
import { cssVariables } from '../src/tokens';

// Inject design tokens as CSS variables
const styleElement = document.createElement('style');
styleElement.innerHTML = cssVariables;
document.head.appendChild(styleElement);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Design Tokens', 'Components', '*'],
      },
    },
  },
};

export default preview;