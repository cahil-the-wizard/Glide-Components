// Icon size design tokens for consistent sizing across components
export const IconSizes = {
  xxs: 10,
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export type IconSize = keyof typeof IconSizes;

// Semantic sizes for specific use cases
export const SemanticIconSizes = {
  button: IconSizes.base,        // 16px for buttons
  input: IconSizes.sm,           // 14px for input controls
  navigation: IconSizes.md,      // 18px for nav items
  header: IconSizes.lg,          // 20px for header actions
  card: IconSizes.sm,            // 14px for card icons
  inline: IconSizes.sm,          // 14px for inline text icons
} as const;