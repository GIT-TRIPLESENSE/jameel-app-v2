export const themeTokens = {
  colors: {
    background: '#F8FAFC',
    surface: '#FFFFFF',
    text: '#111827',
    textMuted: '#4B5563',
    border: '#CBD5E1',
    accent: '#0F766E',
  },
  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    none: 0,
    sm: 4,
    md: 8,
  },
  typography: {
    sizes: {
      title: 24,
      body: 16,
    },
    lineHeights: {
      title: 32,
      body: 24,
    },
    weights: {
      regular: '400',
      semibold: '600',
    },
  },
  layout: {
    screenFlex: 1,
    contentMaxWidth: 560,
  },
  statusBarStyle: 'dark',
} as const;

export const nativeThemeTokens = {
  colors: {
    androidAdaptiveIconBackground: themeTokens.colors.background,
  },
} as const;
