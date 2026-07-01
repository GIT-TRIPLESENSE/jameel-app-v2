import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

import type { AppTheme } from '@/theme';

import type { DealerNetworkTheme } from '../types';

export type DealerNetworkStyles = ReturnType<typeof createDealerNetworkStyles>;

export function createDealerNetworkStyles(
  theme: AppTheme,
  brandTheme: DealerNetworkTheme,
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
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.display,
        lineHeight: theme.typography.lineHeights.display,
      },
      headlineAccent: {
        color: brandTheme.headlineAccentColor,
      },
      heroBody: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      sectionTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      searchPanel: {
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        padding: theme.spacing.base,
        gap: theme.spacing.base,
        ...theme.shadow.subtle,
      },
      searchInputWrap: {
        minHeight: theme.layout.ctaMinHeight,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.surfaceSoft,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        paddingHorizontal: theme.spacing.base,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
      },
      searchInput: {
        flex: theme.layout.screenFlex,
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        paddingVertical: theme.spacing.none,
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
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        textAlign: 'center',
      },
      filterChipTextActive: {
        color: theme.colors.textOnAccent,
        fontFamily: theme.typography.fontFamilies.bold,
      },
      mapPanel: {
        minHeight: theme.layout.brandCardMinHeight,
        overflow: 'hidden',
        borderRadius: theme.radii.xl,
        backgroundColor: brandTheme.darkSurfaceColor,
        padding: theme.spacing.base,
        gap: theme.spacing.base,
      },
      mapPanelHeader: {
        gap: theme.spacing.sm,
      },
      mapTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      mapSummary: {
        color: brandTheme.secondaryOnDarkColor,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      mapCanvas: {
        flex: theme.layout.screenFlex,
        minHeight: theme.layout.storyLargeHeight,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.glassFill,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
      },
      mapCanvasSurface: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: theme.opacity.muted,
      },
      mapPin: {
        position: 'absolute',
        width: theme.layout.iconTouchTarget,
        height: theme.layout.iconTouchTarget,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.ctaLight,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapPinActive: {
        backgroundColor: brandTheme.accentColor,
        borderColor: brandTheme.accentColor,
      },
      networkContent: {
        gap: theme.spacing.base,
      },
      locationList: {
        gap: theme.spacing.md,
      },
      locationCard: {
        minHeight: theme.layout.quickActionSize,
        borderRadius: theme.radii.md,
        backgroundColor: brandTheme.darkSurfaceColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        padding: theme.spacing.base,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.base,
      },
      locationCardSelected: {
        borderColor: brandTheme.accentColor,
      },
      locationIconWrap: {
        width: theme.layout.iconTouchTarget,
        height: theme.layout.iconTouchTarget,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.glassFillStrong,
        alignItems: 'center',
        justifyContent: 'center',
      },
      locationCardBody: {
        flex: theme.layout.screenFlex,
        gap: theme.spacing.sm,
      },
      locationType: {
        color: brandTheme.accentColor,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      locationName: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      locationMeta: {
        color: brandTheme.secondaryOnDarkColor,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      detailPanel: {
        borderRadius: theme.radii.lg,
        backgroundColor: brandTheme.darkSurfaceColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        padding: theme.spacing.base,
        gap: theme.spacing.base,
      },
      detailHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: theme.spacing.base,
      },
      detailBody: {
        flex: theme.layout.screenFlex,
        gap: theme.spacing.sm,
      },
      detailTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
      },
      detailText: {
        flex: theme.layout.screenFlex,
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      detailMutedText: {
        flex: theme.layout.screenFlex,
        color: brandTheme.secondaryOnDarkColor,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      capabilityWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.md,
      },
      capabilityPill: {
        minHeight: theme.layout.filterChipMinHeight,
        borderRadius: theme.radii.pill,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        backgroundColor: theme.colors.glassFill,
        paddingHorizontal: theme.spacing.base,
        alignItems: 'center',
        justifyContent: 'center',
      },
      capabilityText: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      detailActions: {
        flexDirection: 'row',
        gap: theme.spacing.md,
      },
      detailButton: {
        flex: theme.layout.screenFlex,
        minHeight: theme.layout.ctaMinHeight,
        minWidth: theme.layout.vehicleCardActionMinWidth,
        borderRadius: theme.radii.cta,
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.base,
      },
      detailButtonText: {
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
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      stateBody: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      pressed: {
        opacity: theme.opacity.pressed,
      },
    }),
    detailButtonVariants: StyleSheet.create<Record<'primary' | 'secondary', ViewStyle>>({
      primary: {
        backgroundColor: theme.colors.ctaLight,
        borderColor: theme.colors.ctaLight,
      },
      secondary: {
        backgroundColor: theme.colors.glassFill,
        borderColor: theme.colors.borderOnDark,
      },
    }),
    detailButtonTextVariants: StyleSheet.create<Record<'primary' | 'secondary', TextStyle>>({
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
      pinActiveIconColor: {
        color: theme.colors.textOnAccent,
      },
      inputPlaceholderColor: {
        color: theme.colors.textMuted,
      },
      iconSmall: {
        width: theme.icon.sm,
        strokeWidth: theme.icon.stroke,
      },
      iconMedium: {
        width: theme.icon.md,
        strokeWidth: theme.icon.stroke,
      },
    },
  };
}
