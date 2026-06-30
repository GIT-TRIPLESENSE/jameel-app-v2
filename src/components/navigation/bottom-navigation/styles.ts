import { StyleSheet } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';

import type { AppTheme } from '@/theme';

export type BottomNavigationStyles = ReturnType<typeof createBottomNavigationStyles>;

export function createBottomNavigationStyles(theme: AppTheme, insets: EdgeInsets) {
  return StyleSheet.create({
    host: {
      position: 'absolute',
      right: theme.spacing.none,
      bottom: insets.bottom + theme.layout.bottomNavBottomOffset,
      left: theme.spacing.none,
      alignItems: 'center',
      paddingHorizontal: theme.layout.bottomNavHorizontalMargin,
      pointerEvents: 'box-none',
    },
    bar: {
      ...theme.shadow.soft,
      width: '100%',
      maxWidth: theme.layout.bottomNavMaxWidth,
      minHeight: theme.layout.bottomNavHeight,
      borderRadius: theme.radii.xl,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border,
      paddingHorizontal: theme.layout.bottomNavHorizontalPadding,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.sm,
    },
    itemPressable: {
      flex: theme.layout.screenFlex,
      minWidth: theme.layout.bottomNavItemMinWidth,
      minHeight: theme.layout.bottomNavItemMinWidth,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContent: {
      minHeight: theme.layout.bottomNavItemMinWidth,
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.sm,
    },
    activeItemContent: {
      width: theme.layout.bottomNavActiveSize,
      height: theme.layout.bottomNavActiveSize,
      borderRadius: theme.radii.pill,
      backgroundColor: theme.colors.ctaDark,
      gap: theme.spacing.sm,
    },
    label: {
      color: theme.colors.text,
      fontFamily: theme.typography.fontFamilies.semibold,
      fontSize: theme.typography.sizes.nav,
      lineHeight: theme.typography.lineHeights.nav,
      textAlign: 'center',
    },
    activeLabel: {
      color: theme.colors.textOnDark,
    },
    pressed: {
      opacity: theme.opacity.pressed,
    },
  });
}
