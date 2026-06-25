import type { themeTokens } from './tokens';

export type ThemeName = 'default';
export type AppTheme = typeof themeTokens;

export type AppThemeContextValue = {
  theme: AppTheme;
  themeName: ThemeName;
};
