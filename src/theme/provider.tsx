import { createContext, useContext, useMemo, type PropsWithChildren } from 'react';

import { themeTokens } from './tokens';
import type { AppThemeContextValue } from './types';

const ThemeContext = createContext<AppThemeContextValue | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const value = useMemo<AppThemeContextValue>(
    () => ({
      theme: themeTokens,
      themeName: 'default',
    }),
    [],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used inside ThemeProvider.');
  }

  return context;
}
