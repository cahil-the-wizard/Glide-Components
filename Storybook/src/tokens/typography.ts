import designTokens from '../design-tokens.json';

// Extract typography tokens
export const typographyTokens = {
  title: {
    hero: {
      fontSize: designTokens.typography.title['title hero'].fontSize.value,
      fontFamily: designTokens.typography.title['title hero'].fontFamily.value,
      fontWeight: designTokens.typography.title['title hero'].fontWeight.value,
      lineHeight: designTokens.typography.title['title hero'].lineHeight.value,
      letterSpacing: designTokens.typography.title['title hero'].letterSpacing.value,
    },
    page: {
      fontSize: designTokens.typography.title['title page'].fontSize.value,
      fontFamily: designTokens.typography.title['title page'].fontFamily.value,
      fontWeight: designTokens.typography.title['title page'].fontWeight.value,
      lineHeight: designTokens.typography.title['title page'].lineHeight.value,
      letterSpacing: designTokens.typography.title['title page'].letterSpacing.value,
    },
    subtitle: {
      fontSize: designTokens.typography.title.subtitle.fontSize.value,
      fontFamily: designTokens.typography.title.subtitle.fontFamily.value,
      fontWeight: designTokens.typography.title.subtitle.fontWeight.value,
      lineHeight: designTokens.typography.title.subtitle.lineHeight.value,
      letterSpacing: designTokens.typography.title.subtitle.letterSpacing.value,
    },
  },
  
  heading: {
    heading: {
      fontSize: designTokens.typography.heading.heading.fontSize.value,
      fontFamily: designTokens.typography.heading.heading.fontFamily.value,
      fontWeight: designTokens.typography.heading.heading.fontWeight.value,
      lineHeight: designTokens.typography.heading.heading.lineHeight.value,
      letterSpacing: designTokens.typography.heading.heading.letterSpacing.value,
    },
    subheading: {
      fontSize: designTokens.typography.heading.subheading.fontSize.value,
      fontFamily: designTokens.typography.heading.subheading.fontFamily.value,
      fontWeight: designTokens.typography.heading.subheading.fontWeight.value,
      lineHeight: designTokens.typography.heading.subheading.lineHeight.value,
      letterSpacing: designTokens.typography.heading.subheading.letterSpacing.value,
    },
  },
  
  body: {
    base: {
      fontSize: designTokens.typography.body.base.fontSize.value,
      fontFamily: designTokens.typography.body.base.fontFamily.value,
      fontWeight: designTokens.typography.body.base.fontWeight.value,
      lineHeight: designTokens.typography.body.base.lineHeight.value,
      letterSpacing: designTokens.typography.body.base.letterSpacing.value,
      paragraphSpacing: designTokens.typography.body.base.paragraphSpacing.value,
    },
    emphasis: {
      fontSize: designTokens.typography.body.emphasis.fontSize.value,
      fontFamily: designTokens.typography.body.emphasis.fontFamily.value,
      fontWeight: designTokens.typography.body.emphasis.fontWeight.value,
      fontStyle: designTokens.typography.body.emphasis.fontStyle.value,
      lineHeight: designTokens.typography.body.emphasis.lineHeight.value,
      letterSpacing: designTokens.typography.body.emphasis.letterSpacing.value,
    },
    strong: {
      fontSize: designTokens.typography.body.strong.fontSize.value,
      fontFamily: designTokens.typography.body.strong.fontFamily.value,
      fontWeight: designTokens.typography.body.strong.fontWeight.value,
      lineHeight: designTokens.typography.body.strong.lineHeight.value,
      letterSpacing: designTokens.typography.body.strong.letterSpacing.value,
    },
    link: {
      fontSize: designTokens.typography.body.link.fontSize.value,
      fontFamily: designTokens.typography.body.link.fontFamily.value,
      fontWeight: designTokens.typography.body.link.fontWeight.value,
      lineHeight: designTokens.typography.body.link.lineHeight.value,
      letterSpacing: designTokens.typography.body.link.letterSpacing.value,
      textDecoration: designTokens.typography.body.link.textDecoration.value,
    },
    code: {
      fontSize: designTokens.typography.body.code.fontSize.value,
      fontFamily: designTokens.typography.body.code.fontFamily.value,
      fontWeight: designTokens.typography.body.code.fontWeight.value,
      lineHeight: designTokens.typography.body.code.lineHeight.value,
      letterSpacing: designTokens.typography.body.code.letterSpacing.value,
    },
    list: {
      fontSize: designTokens.typography.body.list.fontSize.value,
      fontFamily: designTokens.typography.body.list.fontFamily.value,
      fontWeight: designTokens.typography.body.list.fontWeight.value,
      lineHeight: designTokens.typography.body.list.lineHeight.value,
      letterSpacing: designTokens.typography.body.list.letterSpacing.value,
    },
    small: {
      fontSize: designTokens.typography.body.small.fontSize.value,
      fontFamily: designTokens.typography.body.small.fontFamily.value,
      fontWeight: designTokens.typography.body.small.fontWeight.value,
      lineHeight: designTokens.typography.body.small.lineHeight.value,
      letterSpacing: designTokens.typography.body.small.letterSpacing.value,
    },
    medium: {
      fontSize: designTokens.typography.body.medium.fontSize.value,
      fontFamily: designTokens.typography.body.medium.fontFamily.value,
      fontWeight: designTokens.typography.body.medium.fontWeight.value,
      lineHeight: designTokens.typography.body.medium.lineHeight.value,
      letterSpacing: designTokens.typography.body.medium.letterSpacing.value,
    },
  },
};

// Generate CSS custom properties for typography
export const cssTypographyVariables = `
:root {
  /* Title Typography */
  --typography-title-hero-font-size: ${typographyTokens.title.hero.fontSize}px;
  --typography-title-hero-font-family: ${typographyTokens.title.hero.fontFamily};
  --typography-title-hero-font-weight: ${typographyTokens.title.hero.fontWeight};
  --typography-title-hero-line-height: ${typographyTokens.title.hero.lineHeight}px;
  --typography-title-hero-letter-spacing: ${typographyTokens.title.hero.letterSpacing}px;

  --typography-title-page-font-size: ${typographyTokens.title.page.fontSize}px;
  --typography-title-page-font-family: ${typographyTokens.title.page.fontFamily};
  --typography-title-page-font-weight: ${typographyTokens.title.page.fontWeight};
  --typography-title-page-line-height: ${typographyTokens.title.page.lineHeight}px;
  --typography-title-page-letter-spacing: ${typographyTokens.title.page.letterSpacing}px;

  --typography-title-subtitle-font-size: ${typographyTokens.title.subtitle.fontSize}px;
  --typography-title-subtitle-font-family: ${typographyTokens.title.subtitle.fontFamily};
  --typography-title-subtitle-font-weight: ${typographyTokens.title.subtitle.fontWeight};
  --typography-title-subtitle-line-height: ${typographyTokens.title.subtitle.lineHeight}px;
  --typography-title-subtitle-letter-spacing: ${typographyTokens.title.subtitle.letterSpacing}px;

  /* Heading Typography */
  --typography-heading-font-size: ${typographyTokens.heading.heading.fontSize}px;
  --typography-heading-font-family: ${typographyTokens.heading.heading.fontFamily};
  --typography-heading-font-weight: ${typographyTokens.heading.heading.fontWeight};
  --typography-heading-line-height: ${typographyTokens.heading.heading.lineHeight}px;
  --typography-heading-letter-spacing: ${typographyTokens.heading.heading.letterSpacing}px;

  --typography-subheading-font-size: ${typographyTokens.heading.subheading.fontSize}px;
  --typography-subheading-font-family: ${typographyTokens.heading.subheading.fontFamily};
  --typography-subheading-font-weight: ${typographyTokens.heading.subheading.fontWeight};
  --typography-subheading-line-height: ${typographyTokens.heading.subheading.lineHeight}px;
  --typography-subheading-letter-spacing: ${typographyTokens.heading.subheading.letterSpacing}px;

  /* Body Typography */
  --typography-body-base-font-size: ${typographyTokens.body.base.fontSize}px;
  --typography-body-base-font-family: ${typographyTokens.body.base.fontFamily};
  --typography-body-base-font-weight: ${typographyTokens.body.base.fontWeight};
  --typography-body-base-line-height: ${typographyTokens.body.base.lineHeight}px;
  --typography-body-base-letter-spacing: ${typographyTokens.body.base.letterSpacing}px;

  --typography-body-small-font-size: ${typographyTokens.body.small.fontSize}px;
  --typography-body-small-font-family: ${typographyTokens.body.small.fontFamily};
  --typography-body-small-font-weight: ${typographyTokens.body.small.fontWeight};
  --typography-body-small-line-height: ${typographyTokens.body.small.lineHeight}px;
  --typography-body-small-letter-spacing: ${typographyTokens.body.small.letterSpacing}px;

  --typography-body-medium-font-size: ${typographyTokens.body.medium.fontSize}px;
  --typography-body-medium-font-family: ${typographyTokens.body.medium.fontFamily};
  --typography-body-medium-font-weight: ${typographyTokens.body.medium.fontWeight};
  --typography-body-medium-line-height: ${typographyTokens.body.medium.lineHeight}px;
  --typography-body-medium-letter-spacing: ${typographyTokens.body.medium.letterSpacing}px;

  --typography-body-strong-font-size: ${typographyTokens.body.strong.fontSize}px;
  --typography-body-strong-font-family: ${typographyTokens.body.strong.fontFamily};
  --typography-body-strong-font-weight: ${typographyTokens.body.strong.fontWeight};
  --typography-body-strong-line-height: ${typographyTokens.body.strong.lineHeight}px;
  --typography-body-strong-letter-spacing: ${typographyTokens.body.strong.letterSpacing}px;

  --typography-body-code-font-size: ${typographyTokens.body.code.fontSize}px;
  --typography-body-code-font-family: ${typographyTokens.body.code.fontFamily};
  --typography-body-code-font-weight: ${typographyTokens.body.code.fontWeight};
  --typography-body-code-line-height: ${typographyTokens.body.code.lineHeight}px;
  --typography-body-code-letter-spacing: ${typographyTokens.body.code.letterSpacing}px;
}
`;