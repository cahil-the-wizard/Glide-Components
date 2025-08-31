import designTokens from '../design-tokens.json';

// Extract color tokens and convert to CSS custom properties
export const colorTokens = {
  // Gray Light Mode
  grayLight: {
    25: designTokens.color['gray (light mode)']['25'].value,
    50: designTokens.color['gray (light mode)']['50'].value,
    100: designTokens.color['gray (light mode)']['100'].value,
    200: designTokens.color['gray (light mode)']['200'].value,
    300: designTokens.color['gray (light mode)']['300'].value,
    400: designTokens.color['gray (light mode)']['400'].value,
    500: designTokens.color['gray (light mode)']['500'].value,
    600: designTokens.color['gray (light mode)']['600'].value,
    700: designTokens.color['gray (light mode)']['700'].value,
    800: designTokens.color['gray (light mode)']['800'].value,
    900: designTokens.color['gray (light mode)']['900'].value,
    950: designTokens.color['gray (light mode)']['950'].value,
  },
  
  // Gray Dark Mode
  grayDark: {
    25: designTokens.color['gray (dark mode)']['25'].value,
    50: designTokens.color['gray (dark mode)']['50'].value,
    100: designTokens.color['gray (dark mode)']['100'].value,
    200: designTokens.color['gray (dark mode)']['200'].value,
    300: designTokens.color['gray (dark mode)']['300'].value,
    400: designTokens.color['gray (dark mode)']['400'].value,
    500: designTokens.color['gray (dark mode)']['500'].value,
    600: designTokens.color['gray (dark mode)']['600'].value,
    700: designTokens.color['gray (dark mode)']['700'].value,
    800: designTokens.color['gray (dark mode)']['800'].value,
    900: designTokens.color['gray (dark mode)']['900'].value,
    950: designTokens.color['gray (dark mode)']['950'].value,
  },
  
  // Error
  error: {
    25: designTokens.color.error['25'].value,
    50: designTokens.color.error['50'].value,
    100: designTokens.color.error['100'].value,
    200: designTokens.color.error['200'].value,
    300: designTokens.color.error['300'].value,
    400: designTokens.color.error['400'].value,
    500: designTokens.color.error['500'].value,
    600: designTokens.color.error['600'].value,
    700: designTokens.color.error['700'].value,
    800: designTokens.color.error['800'].value,
    900: designTokens.color.error['900'].value,
    950: designTokens.color.error['950'].value,
  },
  
  // Warning
  warning: {
    25: designTokens.color.warning['25'].value,
    50: designTokens.color.warning['50'].value,
    100: designTokens.color.warning['100'].value,
    200: designTokens.color.warning['200'].value,
    300: designTokens.color.warning['300'].value,
    400: designTokens.color.warning['400'].value,
    500: designTokens.color.warning['500'].value,
    600: designTokens.color.warning['600'].value,
    700: designTokens.color.warning['700'].value,
    800: designTokens.color.warning['800'].value,
    900: designTokens.color.warning['900'].value,
    950: designTokens.color.warning['950'].value,
  },
  
  // Success
  success: {
    25: designTokens.color.success['25'].value,
    50: designTokens.color.success['50'].value,
    100: designTokens.color.success['100'].value,
    200: designTokens.color.success['200'].value,
    300: designTokens.color.success['300'].value,
    400: designTokens.color.success['400'].value,
    500: designTokens.color.success['500'].value,
    600: designTokens.color.success['600'].value,
    700: designTokens.color.success['700'].value,
    800: designTokens.color.success['800'].value,
    900: designTokens.color.success['900'].value,
    950: designTokens.color.success['950'].value,
  },
};

// Generate CSS custom properties
export const cssColorVariables = `
:root {
  /* Gray Light Mode */
  --color-gray-light-25: ${colorTokens.grayLight[25]};
  --color-gray-light-50: ${colorTokens.grayLight[50]};
  --color-gray-light-100: ${colorTokens.grayLight[100]};
  --color-gray-light-200: ${colorTokens.grayLight[200]};
  --color-gray-light-300: ${colorTokens.grayLight[300]};
  --color-gray-light-400: ${colorTokens.grayLight[400]};
  --color-gray-light-500: ${colorTokens.grayLight[500]};
  --color-gray-light-600: ${colorTokens.grayLight[600]};
  --color-gray-light-700: ${colorTokens.grayLight[700]};
  --color-gray-light-800: ${colorTokens.grayLight[800]};
  --color-gray-light-900: ${colorTokens.grayLight[900]};
  --color-gray-light-950: ${colorTokens.grayLight[950]};

  /* Gray Dark Mode */
  --color-gray-dark-25: ${colorTokens.grayDark[25]};
  --color-gray-dark-50: ${colorTokens.grayDark[50]};
  --color-gray-dark-100: ${colorTokens.grayDark[100]};
  --color-gray-dark-200: ${colorTokens.grayDark[200]};
  --color-gray-dark-300: ${colorTokens.grayDark[300]};
  --color-gray-dark-400: ${colorTokens.grayDark[400]};
  --color-gray-dark-500: ${colorTokens.grayDark[500]};
  --color-gray-dark-600: ${colorTokens.grayDark[600]};
  --color-gray-dark-700: ${colorTokens.grayDark[700]};
  --color-gray-dark-800: ${colorTokens.grayDark[800]};
  --color-gray-dark-900: ${colorTokens.grayDark[900]};
  --color-gray-dark-950: ${colorTokens.grayDark[950]};

  /* Error */
  --color-error-25: ${colorTokens.error[25]};
  --color-error-50: ${colorTokens.error[50]};
  --color-error-100: ${colorTokens.error[100]};
  --color-error-200: ${colorTokens.error[200]};
  --color-error-300: ${colorTokens.error[300]};
  --color-error-400: ${colorTokens.error[400]};
  --color-error-500: ${colorTokens.error[500]};
  --color-error-600: ${colorTokens.error[600]};
  --color-error-700: ${colorTokens.error[700]};
  --color-error-800: ${colorTokens.error[800]};
  --color-error-900: ${colorTokens.error[900]};
  --color-error-950: ${colorTokens.error[950]};

  /* Warning */
  --color-warning-25: ${colorTokens.warning[25]};
  --color-warning-50: ${colorTokens.warning[50]};
  --color-warning-100: ${colorTokens.warning[100]};
  --color-warning-200: ${colorTokens.warning[200]};
  --color-warning-300: ${colorTokens.warning[300]};
  --color-warning-400: ${colorTokens.warning[400]};
  --color-warning-500: ${colorTokens.warning[500]};
  --color-warning-600: ${colorTokens.warning[600]};
  --color-warning-700: ${colorTokens.warning[700]};
  --color-warning-800: ${colorTokens.warning[800]};
  --color-warning-900: ${colorTokens.warning[900]};
  --color-warning-950: ${colorTokens.warning[950]};

  /* Success */
  --color-success-25: ${colorTokens.success[25]};
  --color-success-50: ${colorTokens.success[50]};
  --color-success-100: ${colorTokens.success[100]};
  --color-success-200: ${colorTokens.success[200]};
  --color-success-300: ${colorTokens.success[300]};
  --color-success-400: ${colorTokens.success[400]};
  --color-success-500: ${colorTokens.success[500]};
  --color-success-600: ${colorTokens.success[600]};
  --color-success-700: ${colorTokens.success[700]};
  --color-success-800: ${colorTokens.success[800]};
  --color-success-900: ${colorTokens.success[900]};
  --color-success-950: ${colorTokens.success[950]};
}
`;