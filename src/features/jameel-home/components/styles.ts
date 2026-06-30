import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

import type { AppTheme } from '@/theme';

import type { ButtonVariant } from './types';

export type JameelHomeStyles = ReturnType<typeof createJameelHomeStyles>;

export function createJameelHomeStyles(theme: AppTheme, isCompact: boolean) {
  const pagePadding = isCompact ? theme.layout.compactPageMargin : theme.layout.mobilePageMargin;
  const quickActionSize = isCompact
    ? theme.layout.quickActionSize - theme.spacing.md
    : theme.layout.quickActionSize;
  const brandCardHeight = isCompact
    ? theme.layout.brandCardMinHeight - theme.spacing.xl
    : theme.layout.brandCardMinHeight;

  return {
    ...StyleSheet.create({
      safeArea: {
        flex: theme.layout.screenFlex,
        backgroundColor: theme.colors.jameel.primary,
      },
      scrollContent: {
        backgroundColor: theme.colors.background,
      },
      hero: {
        minHeight: isCompact
          ? theme.layout.brandCardMinHeight + theme.layout.headerMinHeight
          : theme.layout.brandCardMinHeight + theme.layout.bottomNavHeight,
        overflow: 'hidden',
        borderBottomLeftRadius: theme.radii.xl,
        borderBottomRightRadius: theme.radii.xl,
        backgroundColor: theme.colors.jameel.primary,
      },
      heroImage: {
        borderBottomLeftRadius: theme.radii.xl,
        borderBottomRightRadius: theme.radii.xl,
      },
      heroScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlayMedium,
      },
      header: {
        position: 'relative',
        minHeight: theme.layout.headerMinHeight,
        paddingHorizontal: pagePadding,
        paddingTop: theme.spacing.base,
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
        backgroundColor: theme.colors.ctaLight,
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
      heroContent: {
        flex: theme.layout.screenFlex,
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: theme.spacing.base,
        paddingHorizontal: pagePadding,
        paddingVertical: theme.spacing.xl,
      },
      heroTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: isCompact ? theme.typography.sizes.display : theme.typography.sizes.hero,
        lineHeight: isCompact
          ? theme.typography.lineHeights.display
          : theme.typography.lineHeights.hero,
        width: '100%',
      },
      heroBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
        width: '100%',
      },
      mainContent: {
        width: '100%',
        maxWidth: theme.layout.mobileContentMaxWidth,
        alignSelf: 'center',
        gap: theme.spacing.xl,
        paddingHorizontal: pagePadding,
        paddingTop: theme.spacing.base,
        paddingBottom: theme.spacing.xxxl,
      },
      quickActions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: theme.spacing.md,
      },
      quickAction: {
        flex: theme.layout.screenFlex,
        minHeight: theme.layout.quickActionSize + theme.spacing.xl,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: theme.spacing.md,
        position: 'relative',
      },
      quickIconWrap: {
        width: quickActionSize,
        height: quickActionSize,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.jameel.primary,
        alignItems: 'center',
        justifyContent: 'center',
      },
      quickActionText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.semibold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        textAlign: 'center',
      },
      quickDivider: {
        position: 'absolute',
        right: -theme.spacing.sm,
        top: theme.spacing.xl,
        width: StyleSheet.hairlineWidth,
        height: theme.layout.quickActionSize,
        backgroundColor: theme.colors.border,
      },
      section: {
        gap: theme.spacing.base,
      },
      sectionTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      brandGrid: {
        flexDirection: 'row',
        gap: theme.spacing.md,
      },
      brandCard: {
        flex: theme.layout.screenFlex,
        minHeight: brandCardHeight,
        borderRadius: theme.radii.lg,
        overflow: 'hidden',
        backgroundColor: theme.colors.jameel.secondary,
      },
      brandCardMedia: {
        flex: theme.layout.screenFlex,
      },
      brandCardImage: {
        borderRadius: theme.radii.lg,
      },
      brandCardOverlay: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlaySoft,
      },
      brandCardContent: {
        flex: theme.layout.screenFlex,
        justifyContent: 'space-between',
        padding: theme.spacing.base,
      },
      brandLogoText: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      brandTitleGroup: {
        gap: theme.spacing.sm,
      },
      brandCardTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: isCompact
          ? theme.typography.sizes.bodyLarge
          : theme.typography.sizes.sectionTitle,
        lineHeight: isCompact
          ? theme.typography.lineHeights.bodyLarge
          : theme.typography.lineHeights.sectionTitle,
      },
      zeekrAccentText: {
        color: theme.colors.zeekr.accent,
      },
      geelyAccentText: {
        color: theme.colors.geely.accent,
      },
      brandCardCta: {
        minHeight: theme.layout.ctaMinHeight,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.ctaLight,
        paddingHorizontal: theme.spacing.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.sm,
      },
      brandCardCtaText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      scenarioList: {
        gap: theme.spacing.md,
      },
      scenarioCard: {
        minHeight: theme.layout.quickActionSize,
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.jameel.secondary,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        padding: theme.spacing.base,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.base,
      },
      scenarioIcon: {
        width: theme.layout.headerControlMinHeight,
        height: theme.layout.headerControlMinHeight,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.glassFillStrong,
        alignItems: 'center',
        justifyContent: 'center',
      },
      scenarioContent: {
        flex: theme.layout.screenFlex,
        gap: theme.spacing.sm,
      },
      scenarioLabel: {
        color: theme.colors.jameel.accent,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      scenarioTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.semibold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      statsGrid: {
        flexDirection: 'row',
        gap: theme.spacing.md,
      },
      statCard: {
        ...theme.shadow.subtle,
        flex: theme.layout.screenFlex,
        minHeight: theme.layout.quickActionSize + theme.spacing.xl,
        borderRadius: theme.radii.md,
        backgroundColor: theme.colors.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        padding: theme.spacing.base,
        justifyContent: 'space-between',
        gap: theme.spacing.sm,
      },
      statValue: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: isCompact ? theme.typography.sizes.sectionTitle : theme.typography.sizes.stat,
        lineHeight: isCompact
          ? theme.typography.lineHeights.sectionTitle
          : theme.typography.lineHeights.stat,
      },
      statLabel: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      expertList: {
        gap: theme.spacing.md,
      },
      expertItem: {
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        padding: theme.spacing.base,
        gap: theme.spacing.base,
      },
      expertCopy: {
        gap: theme.spacing.md,
      },
      expertQuestion: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      expertAnswer: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      expertCta: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      storyList: {
        gap: theme.spacing.md,
      },
      smallStoryGrid: {
        flexDirection: 'row',
        gap: theme.spacing.md,
      },
      storyCard: {
        overflow: 'hidden',
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.jameel.secondary,
      },
      storyCardLarge: {
        minHeight: theme.layout.storyLargeHeight,
      },
      storyCardSmall: {
        flex: theme.layout.screenFlex,
        minHeight: theme.layout.storySmallHeight,
      },
      storyImage: {
        borderRadius: theme.radii.lg,
      },
      storyScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlayStrong,
      },
      storyContent: {
        flex: theme.layout.screenFlex,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: theme.spacing.md,
        padding: theme.spacing.base,
      },
      storyBadge: {
        overflow: 'hidden',
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.jameel.accent,
        color: theme.colors.textOnAccent,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
      },
      storyTitleLarge: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      storyTitleSmall: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      storyBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      membership: {
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.jameel.secondary,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        padding: theme.spacing.base,
        gap: theme.spacing.base,
      },
      membershipIcon: {
        width: theme.layout.headerControlMinHeight,
        height: theme.layout.headerControlMinHeight,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.glassFillStrong,
        alignItems: 'center',
        justifyContent: 'center',
      },
      membershipCopy: {
        gap: theme.spacing.md,
      },
      membershipTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      membershipBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      closing: {
        ...theme.shadow.soft,
        borderRadius: theme.radii.xl,
        backgroundColor: theme.colors.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        padding: theme.spacing.lg,
        gap: theme.spacing.base,
      },
      closingTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.extraBold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      closingBody: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.medium,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      closingActions: {
        gap: theme.spacing.md,
      },
      button: {
        minHeight: theme.layout.ctaMinHeight,
        borderRadius: theme.radii.pill,
        paddingHorizontal: theme.spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
      },
      buttonText: {
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      pressed: {
        opacity: theme.opacity.pressed,
      },
    }),
    buttonVariants: StyleSheet.create<Record<ButtonVariant, ViewStyle>>({
      light: {
        backgroundColor: theme.colors.ctaLight,
        borderColor: theme.colors.ctaLight,
      },
      dark: {
        backgroundColor: theme.colors.ctaDark,
        borderColor: theme.colors.ctaDark,
      },
      outlineOnDark: {
        backgroundColor: theme.colors.glassFill,
        borderColor: theme.colors.borderOnDark,
      },
      outlineOnLight: {
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
      },
    }),
    buttonTextVariants: StyleSheet.create<Record<ButtonVariant, TextStyle>>({
      light: {
        color: theme.colors.text,
      },
      dark: {
        color: theme.colors.textOnDark,
      },
      outlineOnDark: {
        color: theme.colors.textOnDark,
      },
      outlineOnLight: {
        color: theme.colors.text,
      },
    }),
    meta: {
      darkIconColor: {
        color: theme.colors.textOnDark,
      },
      lightIconColor: {
        color: theme.colors.text,
      },
      selectorIconColor: {
        color: theme.colors.text,
      },
      jameelAccentColor: {
        color: theme.colors.jameel.accent,
      },
      iconSmall: {
        width: theme.icon.sm,
      },
      iconMedium: {
        width: theme.icon.md,
      },
      iconLarge: {
        width: theme.icon.lg,
      },
      iconStroke: {
        width: theme.icon.stroke,
      },
    },
  };
}
