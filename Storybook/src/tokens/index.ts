import { colorTokens, cssColorVariables } from './colors';
import { typographyTokens, cssTypographyVariables } from './typography';

export { colorTokens, typographyTokens };

// Combined CSS variables
export const cssVariables = cssColorVariables + cssTypographyVariables;