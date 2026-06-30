import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

import type { AppTheme } from '@/theme';

import type { BrandProductsTheme } from '../types';

export type BrandProductsStyles = ReturnType<typeof createBrandProductsStyles>;

export function createBrandProductsStyles(
  theme: AppTheme,
  brandTheme: BrandProductsTheme,
  isCompact: boolean,
) {
  const pagePadding = isCompact ? theme.layout.compactPageMargin : theme.layout.mobilePageMargin;

  return {
    ...StyleSheet.create({
      safeArea: {
        flex: theme.layout.screenFlex,
        backgroundColor: brandTheme.backgroundColor,
      },
      scrollContent: {
        flexGrow: theme.layout.screenFlex,
        backgroundColor: brandTheme.backgroundColor,
        paddingBottom:
          theme.layout.bottomNavHeight +
          theme.layout.bottomNavBottomOffset +
          theme.layout.mobilePageMargin,
      },
      content: {
        width: '100%',
        maxWidth: theme.layout.mobileContentMaxWidth,
        alignSelf: 'center',
        paddingHorizontal: pagePadding,
        paddingTop: theme.spacing.base,
        gap: theme.spacing.lg,
      },
      header: {
        position: 'relative',
        minHeight: theme.layout.headerMinHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.base,
      },
      brandSelector: {
        zIndex: theme.layout.screenFlex,
        minHeight: theme.layout.headerControlMinHeight,
        width: theme.layout.headerBrandSelectorWidth,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.glassFillStrong,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
      },
      brandSelectorText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      logoMark: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoImage: {
        width: theme.layout.headerLogoWidth,
        height: theme.layout.headerLogoHeight,
      },
      profileButton: {
        zIndex: theme.layout.screenFlex,
        width: theme.layout.headerControlMinHeight,
        height: theme.layout.headerControlMinHeight,
        alignItems: 'center',
        justifyContent: 'center',
      },
      hero: {
        gap: theme.spacing.lg,
      },
      headline: {
        gap: theme.spacing.sm,
      },
      headlineLine: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.display,
        lineHeight: theme.typography.lineHeights.display,
      },
      headlineAccent: {
        color: brandTheme.headlineAccentColor,
      },
      sectionTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      filterScrollContent: {
        gap: theme.spacing.md,
        paddingRight: pagePadding,
      },
      filterChip: {
        minHeight: theme.layout.filterChipMinHeight,
        minWidth: theme.layout.vehicleCardActionMinWidth,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.surfaceMuted,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        paddingHorizontal: theme.spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
      },
      filterChipActive: {
        backgroundColor: brandTheme.accentColor,
        borderColor: brandTheme.accentColor,
      },
      filterChipText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.semibold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        textAlign: 'center',
      },
      filterChipTextActive: {
        color: theme.colors.textOnAccent,
        fontFamily: theme.typography.fontFamilies.bold,
      },
      catalog: {
        gap: theme.spacing.base,
      },
      vehicleList: {
        gap: theme.spacing.base,
      },
      vehicleCard: {
        height: theme.layout.vehicleCardMaxHeight,
        maxHeight: theme.layout.vehicleCardMaxHeight,
        overflow: 'hidden',
        borderRadius: theme.radii.lg,
        backgroundColor: brandTheme.cardBackgroundColor,
      },
      vehicleImageWrap: {
        height: theme.layout.vehicleCardImageHeight,
        backgroundColor: brandTheme.cardBackgroundColor,
      },
      vehicleImage: {
        borderRadius: theme.radii.lg,
      },
      vehicleImageScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
      },
      favoriteButton: {
        position: 'absolute',
        top: theme.spacing.base,
        right: theme.spacing.base,
        width: theme.layout.iconTouchTarget,
        height: theme.layout.iconTouchTarget,
        alignItems: 'center',
        justifyContent: 'center',
      },
      vehicleContent: {
        flex: theme.layout.screenFlex,
        justifyContent: 'flex-end',
        padding: theme.spacing.base,
        gap: theme.spacing.md,
      },
      vehicleTitleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: theme.spacing.base,
      },
      vehicleTitleGroup: {
        flex: theme.layout.screenFlex,
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: theme.spacing.sm,
      },
      vehicleTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
        textShadowColor: theme.colors.overlayStrong,
        textShadowOffset: {
          width: theme.spacing.none,
          height: theme.spacing.sm,
        },
        textShadowRadius: theme.spacing.md,
      },
      vehicleTitleAccent: {
        color: brandTheme.accentColor,
      },
      vehicleSummary: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      priceGroup: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: theme.spacing.sm,
      },
      pricePrefix: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
        textShadowColor: theme.colors.overlayStrong,
        textShadowOffset: {
          width: theme.spacing.none,
          height: theme.spacing.sm,
        },
        textShadowRadius: theme.spacing.md,
      },
      priceValue: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
        textShadowColor: theme.colors.overlayStrong,
        textShadowOffset: {
          width: theme.spacing.none,
          height: theme.spacing.sm,
        },
        textShadowRadius: theme.spacing.md,
      },
      metricTray: {
        minHeight: theme.layout.vehicleMetricTrayMinHeight,
        overflow: 'hidden',
        borderRadius: theme.radii.md,
        backgroundColor: theme.colors.glassFill,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.vehicleMetricGlassBorder,
        flexDirection: 'row',
        alignItems: 'stretch',
      },
      metricGlassLayer: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
      },
      metricItem: {
        flex: theme.layout.screenFlex,
        zIndex: theme.layout.screenFlex,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.md,
        gap: theme.spacing.sm,
      },
      metricItemDivider: {
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderLeftColor: theme.colors.vehicleMetricGlassDivider,
      },
      metricLabel: {
        color: brandTheme.secondaryOnDarkColor,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
        textAlign: 'center',
      },
      metricValue: {
        color: brandTheme.accentColor,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        textAlign: 'center',
      },
      vehicleActions: {
        flexDirection: 'row',
        gap: theme.spacing.md,
      },
      vehicleButton: {
        flex: theme.layout.screenFlex,
        height: theme.layout.vehicleCardButtonMaxHeight,
        maxHeight: theme.layout.vehicleCardButtonMaxHeight,
        minWidth: theme.layout.vehicleCardActionMinWidth,
        borderRadius: theme.radii.pill,
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.md,
      },
      vehicleButtonText: {
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        textAlign: 'center',
      },
      statePanel: {
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        padding: theme.spacing.lg,
        gap: theme.spacing.md,
      },
      stateTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      stateBody: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      pressed: {
        opacity: theme.opacity.pressed,
      },
    }),
    buttonVariants: StyleSheet.create<Record<'primary' | 'secondary', ViewStyle>>({
      primary: {
        backgroundColor: theme.colors.ctaLight,
        borderColor: theme.colors.ctaLight,
      },
      secondary: {
        backgroundColor: theme.colors.glassFill,
        borderColor: theme.colors.borderOnDark,
      },
    }),
    buttonTextVariants: StyleSheet.create<Record<'primary' | 'secondary', TextStyle>>({
      primary: {
        color: theme.colors.text,
      },
      secondary: {
        color: theme.colors.textOnDark,
      },
    }),
    meta: {
      accentColor: {
        color: brandTheme.accentColor,
      },
      darkIconColor: {
        color: theme.colors.text,
      },
      lightIconColor: {
        color: theme.colors.textOnDark,
      },
      iconSmall: {
        width: theme.icon.sm,
        strokeWidth: theme.icon.stroke,
      },
      iconMedium: {
        width: theme.icon.md,
        strokeWidth: theme.icon.stroke,
      },
      vehicleScrim: {
        colors: theme.colors.vehicleCardScrim,
        end: theme.gradient.vehicleCardScrim.end,
        locations: theme.gradient.vehicleCardScrim.locations,
        start: theme.gradient.vehicleCardScrim.start,
      },
      metricGlassSurface: {
        colors: theme.colors.vehicleMetricGlassSurface,
        end: theme.gradient.vehicleMetricGlassSurface.end,
        locations: theme.gradient.vehicleMetricGlassSurface.locations,
        start: theme.gradient.vehicleMetricGlassSurface.start,
      },
      metricGlassSheen: {
        colors: theme.colors.vehicleMetricGlassSheen,
        end: theme.gradient.vehicleMetricGlassSheen.end,
        locations: theme.gradient.vehicleMetricGlassSheen.locations,
        start: theme.gradient.vehicleMetricGlassSheen.start,
      },
      metricGlassDepth: {
        colors: theme.colors.vehicleMetricGlassDepth,
        end: theme.gradient.vehicleMetricGlassDepth.end,
        locations: theme.gradient.vehicleMetricGlassDepth.locations,
        start: theme.gradient.vehicleMetricGlassDepth.start,
      },
    },
  };
}
