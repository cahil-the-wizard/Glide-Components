import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Glide Components',
  brandUrl: 'https://github.com/your-org/glide-components',
  brandImage: './logo.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});