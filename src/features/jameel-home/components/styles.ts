import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';

import type { AppTheme } from '@/theme';

import type { ButtonVariant } from './types';

export type JameelHomeStyles = ReturnType<typeof createJameelHomeStyles>;

export function createJameelHomeStyles(
  theme: AppTheme,
  isCompact: boolean,
  viewportWidth: number = theme.layout.mobileContentMaxWidth,
) {
  const pagePadding = isCompact ? theme.layout.compactPageMargin : theme.layout.mobilePageMargin;
  const mainContentWidth = Math.min(viewportWidth, theme.layout.mobileContentMaxWidth);
  const fullBleedHorizontalOffset = (viewportWidth - mainContentWidth) / 2 + pagePadding;
  const quickActionSize = isCompact
    ? theme.layout.quickActionSize - theme.spacing.md
    : theme.layout.quickActionSize;
  const brandCardHeight = theme.layout.brandCardMinHeight;
  const heroMinHeight = isCompact
    ? theme.layout.brandCardMinHeight +
      theme.layout.headerMinHeight +
      theme.layout.storyLargeHeight +
      theme.spacing.xxxl
    : theme.layout.brandCardMinHeight +
      theme.layout.bottomNavHeight +
      theme.layout.storyLargeHeight +
      theme.spacing.xxxl;
  const knowledgeStoryRadius = theme.radii.xl;
  const faqCarouselCardWidth = Math.min(
    mainContentWidth - pagePadding * 4,
    theme.layout.brandCardMinHeight,
  );
  const faqCarouselCardHeight = theme.layout.brandCardMinHeight + theme.spacing.lg;
  const faqCarouselSideOffset = faqCarouselCardWidth * 0.42;

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
        minHeight: heroMinHeight,
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
        height: theme.layout.ctaMinHeight,
        width: theme.layout.headerBrandSelectorWidth,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.radii.cta,
        backgroundColor: theme.colors.ctaLight,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.sm,
      },
      brandSelectorOnDark: {
        backgroundColor: theme.colors.ctaLight,
        borderColor: theme.colors.ctaLight,
      },
      brandSelectorText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      brandSelectorTextOnDark: {
        color: theme.colors.text,
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
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: theme.spacing.lg,
        paddingHorizontal: pagePadding,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
      },
      heroTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: isCompact ? theme.typography.sizes.display : theme.typography.sizes.hero,
        lineHeight: isCompact
          ? theme.typography.lineHeights.display
          : theme.typography.lineHeights.hero,
        width: '100%',
      },
      heroBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
        width: '100%',
      },
      heroScrollHint: {
        minHeight: theme.layout.filterChipMinHeight,
        borderRadius: theme.radii.pill,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        backgroundColor: theme.colors.glassFill,
        paddingHorizontal: theme.spacing.base,
        alignItems: 'center',
        justifyContent: 'center',
      },
      heroScrollHintText: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      mainContent: {
        width: '100%',
        maxWidth: theme.layout.mobileContentMaxWidth,
        alignSelf: 'center',
        gap: theme.spacing.xxl,
        paddingHorizontal: pagePadding,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xxxl,
      },
      alternatingSection: {
        gap: theme.spacing.base,
      },
      sectionHeader: {
        gap: theme.spacing.md,
      },
      sectionHeaderRight: {
        alignItems: 'flex-end',
      },
      textRight: {
        textAlign: 'right',
      },
      sectionEyebrow: {
        color: theme.colors.jameel.primary,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
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
        fontFamily: theme.typography.fontFamilies.regular,
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
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      solutionStack: {
        gap: theme.spacing.lg,
      },
      quizEntryCard: {
        width: '100%',
        minHeight: theme.layout.quickActionSize + theme.spacing.base,
        borderRadius: theme.radii.xl,
        backgroundColor: theme.colors.surface,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border,
        paddingVertical: theme.spacing.base,
        paddingHorizontal: theme.spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.base,
        ...theme.shadow.subtle,
      },
      quizEntryCopy: {
        flex: theme.layout.screenFlex,
        gap: theme.spacing.sm,
      },
      quizEntryTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      quizEntryBody: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      quizEntryArrow: {
        width: theme.layout.headerControlMinHeight,
        height: theme.layout.headerControlMinHeight,
        alignItems: 'center',
        justifyContent: 'center',
      },
      solutionCtaText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
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
        overflow: 'hidden',
        backgroundColor: theme.colors.jameel.secondary,
      },
      brandCardSheen: {
        position: 'absolute',
        top: -theme.spacing.xxxl,
        right: -theme.spacing.xxl,
        width: theme.layout.brandCardMinHeight,
        height: theme.layout.brandCardMinHeight + theme.spacing.xxxl,
        backgroundColor: theme.colors.glassFill,
        transform: [{ rotate: '42deg' }],
      },
      brandCardContent: {
        flex: theme.layout.screenFlex,
        alignItems: 'flex-start',
        paddingHorizontal: theme.spacing.base,
        paddingVertical: theme.spacing.md + theme.spacing.sm,
        gap: theme.spacing.base,
        zIndex: theme.layout.screenFlex,
      },
      brandLogoImage: {
        width: isCompact
          ? theme.layout.headerLogoWidth
          : theme.layout.headerLogoWidth + theme.spacing.lg,
        height: theme.layout.headerControlMinHeight,
      },
      brandTitleGroup: {
        gap: theme.spacing.sm,
      },
      brandCardTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      brandVehicleImage: {
        position: 'absolute',
        right: isCompact ? -(theme.spacing.xxxl + theme.spacing.xl) : -theme.spacing.xxxl,
        bottom: isCompact ? -theme.spacing.lg : -theme.spacing.md,
        width: isCompact
          ? theme.layout.brandCardMinHeight + theme.spacing.lg
          : theme.layout.brandCardMinHeight + theme.spacing.xxxl,
        height: theme.layout.storyLargeHeight,
      },
      zeekrAccentText: {
        color: theme.colors.zeekr.accent,
      },
      geelyAccentText: {
        color: theme.colors.geely.accent,
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
        paddingHorizontal: theme.spacing.base,
        paddingVertical: theme.spacing.md + theme.spacing.sm,
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
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      journeySection: {
        width: viewportWidth,
        marginHorizontal: -fullBleedHorizontalOffset,
        gap: theme.spacing.none,
      },
      journeyHeader: {
        paddingHorizontal: fullBleedHorizontalOffset,
        paddingBottom: theme.spacing.base,
      },
      journeyRail: {
        gap: theme.spacing.none,
      },
      journeyStep: {
        width: '100%',
        minHeight: isCompact
          ? theme.layout.quickActionSize + theme.spacing.xxl
          : theme.layout.quickActionSize + theme.spacing.xxxl,
        overflow: 'hidden',
        borderRadius: theme.radii.none,
        paddingHorizontal: fullBleedHorizontalOffset,
        paddingVertical: theme.spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.base,
        position: 'relative',
      },
      journeyStepFirst: {
        borderTopLeftRadius: theme.radii.none,
        borderTopRightRadius: theme.radii.none,
      },
      journeyStepLast: {
        borderBottomLeftRadius: theme.radii.none,
        borderBottomRightRadius: theme.radii.none,
      },
      journeyStepPrimary: {
        backgroundColor: theme.colors.jameel.primary,
      },
      journeyStepSoft: {
        backgroundColor: theme.colors.jameel.petrolSoft,
      },
      journeyStepDeep: {
        backgroundColor: theme.colors.jameel.petrolDeep,
      },
      journeySeparatorShape: {
        position: 'absolute',
        left: -theme.spacing.xxl,
        right: -theme.spacing.xxl,
        bottom: -theme.spacing.lg,
        height: theme.spacing.xxl,
        transform: [{ rotate: '-3deg' }],
      },
      journeySeparatorToSoft: {
        backgroundColor: theme.colors.jameel.petrolSoft,
      },
      journeySeparatorToDeep: {
        backgroundColor: theme.colors.jameel.petrolDeep,
      },
      journeyIcon: {
        width: theme.layout.headerControlMinHeight,
        height: theme.layout.headerControlMinHeight,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.glassFillStrong,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: theme.layout.screenFlex,
      },
      journeyCopy: {
        flex: theme.layout.screenFlex,
        gap: theme.spacing.sm,
        zIndex: theme.layout.screenFlex,
      },
      journeyLabel: {
        color: theme.colors.jameel.accent,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      journeyTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      journeyBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      guideSection: {
        gap: theme.spacing.base,
      },
      guideMedia: {
        minHeight: theme.layout.brandCardMinHeight + theme.spacing.xxl,
        overflow: 'hidden',
        borderRadius: theme.radii.xl,
        backgroundColor: theme.colors.jameel.secondary,
      },
      guideImage: {
        borderRadius: theme.radii.xl,
      },
      guideScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlayStrong,
      },
      guidePlay: {
        position: 'absolute',
        top: theme.spacing.lg,
        right: theme.spacing.lg,
        width: theme.layout.iconTouchTarget,
        height: theme.layout.iconTouchTarget,
        borderRadius: theme.radii.cta,
        backgroundColor: theme.colors.ctaLight,
        alignItems: 'center',
        justifyContent: 'center',
      },
      guideContent: {
        flex: theme.layout.screenFlex,
        justifyContent: 'flex-end',
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
      },
      guideBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      guidePills: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.md,
      },
      guidePill: {
        minHeight: theme.layout.filterChipMinHeight,
        borderRadius: theme.radii.pill,
        backgroundColor: theme.colors.glassFillStrong,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
        paddingHorizontal: theme.spacing.base,
        alignItems: 'center',
        justifyContent: 'center',
      },
      guidePillText: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      peopleSection: {
        width: viewportWidth,
        marginHorizontal: -fullBleedHorizontalOffset,
        borderRadius: theme.radii.none,
        backgroundColor: theme.colors.jameel.primary,
        paddingVertical: theme.spacing.xl,
        gap: theme.spacing.base,
      },
      peopleHeader: {
        paddingHorizontal: fullBleedHorizontalOffset,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing.base,
      },
      peopleSectionTitle: {
        flex: theme.layout.screenFlex,
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      peopleCta: {
        minHeight: theme.layout.vehicleCardButtonMaxHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: theme.spacing.sm,
        flexShrink: 0,
      },
      peopleCtaText: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      peopleCarouselViewport: {
        overflow: 'hidden',
      },
      peopleCarouselTrack: {
        gap: theme.spacing.base,
        paddingHorizontal: fullBleedHorizontalOffset,
      },
      peopleCard: {
        width: isCompact
          ? theme.layout.storyLargeHeight + theme.spacing.base
          : theme.layout.brandCardMinHeight - theme.spacing.lg,
        height: theme.layout.brandCardMinHeight - theme.spacing.lg,
        overflow: 'hidden',
        borderRadius: theme.radii.lg,
        backgroundColor: theme.colors.jameel.primary,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.borderOnDark,
      },
      peopleImage: {
        borderRadius: theme.radii.lg,
      },
      peopleScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlayMedium,
      },
      peopleCopy: {
        flex: theme.layout.screenFlex,
        justifyContent: 'flex-end',
        padding: theme.spacing.base,
        gap: theme.spacing.sm,
      },
      peopleTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      peopleBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
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
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: isCompact ? theme.typography.sizes.sectionTitle : theme.typography.sizes.stat,
        lineHeight: isCompact
          ? theme.typography.lineHeights.sectionTitle
          : theme.typography.lineHeights.stat,
      },
      statLabel: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.regular,
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
        fontFamily: theme.typography.fontFamilies.regular,
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
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      storyTitleSmall: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      storyBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
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
      membershipPanel: {
        overflow: 'hidden',
        borderRadius: theme.radii.xl,
        backgroundColor: theme.colors.jameel.secondary,
      },
      membershipImage: {
        borderRadius: theme.radii.xl,
      },
      membershipScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlayStrong,
      },
      membershipContent: {
        alignItems: 'flex-start',
        padding: theme.spacing.lg,
        gap: theme.spacing.base,
      },
      membershipHeading: {
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
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      membershipBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
        width: '92%',
      },
      membershipSignals: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.md,
      },
      membershipSignal: {
        minHeight: theme.layout.filterChipMinHeight,
        borderRadius: theme.radii.tag,
        backgroundColor: theme.colors.jameel.accentSoft,
        paddingHorizontal: theme.spacing.base,
        alignItems: 'center',
        justifyContent: 'center',
      },
      membershipSignalText: {
        color: theme.colors.jameel.tagText,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      membershipCta: {
        minHeight: theme.layout.ctaMinHeight,
        maxWidth: '100%',
        minWidth: theme.layout.brandCardMinHeight,
        borderRadius: theme.radii.cta,
        backgroundColor: theme.colors.ctaLight,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.ctaLight,
        paddingHorizontal: theme.spacing.xl,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.base,
      },
      membershipCtaText: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.bodyLarge,
        lineHeight: theme.typography.lineHeights.bodyLarge,
      },
      faqSection: {
        marginHorizontal: -pagePadding,
        paddingHorizontal: pagePadding,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        gap: theme.spacing.lg,
      },
      faqStack: {
        gap: theme.spacing.base,
      },
      faqSectionHeader: {
        gap: theme.spacing.md,
      },
      faqSectionTitle: {
        color: theme.colors.text,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.sectionTitle,
        lineHeight: theme.typography.lineHeights.sectionTitle,
      },
      faqSectionTitleAccent: {
        color: theme.colors.jameel.primary,
      },
      faqStoriesViewport: {
        overflow: 'hidden',
      },
      faqStoriesTrack: {
        gap: theme.spacing.md,
        paddingRight: pagePadding,
      },
      faqCarouselViewport: {
        height: faqCarouselCardHeight + theme.spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      },
      faqCarouselDeck: {
        width: faqCarouselCardWidth + faqCarouselSideOffset * 2,
        height: faqCarouselCardHeight,
        alignItems: 'center',
        justifyContent: 'center',
      },
      faqCarouselCardLayer: {
        position: 'absolute',
        width: faqCarouselCardWidth,
        height: faqCarouselCardHeight,
      },
      faqCard: {
        flex: theme.layout.screenFlex,
        overflow: 'hidden',
        borderRadius: knowledgeStoryRadius,
        backgroundColor: theme.colors.jameel.secondary,
      },
      faqCardFirst: {
        marginLeft: theme.spacing.none,
      },
      faqMedia: {
        flex: theme.layout.screenFlex,
        backgroundColor: theme.colors.jameel.secondary,
      },
      faqImage: {
        borderRadius: knowledgeStoryRadius,
      },
      faqScrim: {
        position: 'absolute',
        top: theme.spacing.none,
        right: theme.spacing.none,
        bottom: theme.spacing.none,
        left: theme.spacing.none,
        backgroundColor: theme.colors.overlayMedium,
      },
      faqSideScrim: {
        backgroundColor: theme.colors.overlayStrong,
      },
      faqStoryTop: {
        paddingTop: theme.spacing.base,
        paddingHorizontal: theme.spacing.base,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      faqPlay: {
        width: theme.layout.vehicleCardButtonMaxHeight,
        height: theme.layout.vehicleCardButtonMaxHeight,
        borderRadius: theme.radii.cta,
        backgroundColor: theme.colors.ctaLight,
        alignItems: 'center',
        justifyContent: 'center',
      },
      faqStoryCopy: {
        flex: theme.layout.screenFlex,
        justifyContent: 'flex-end',
        padding: theme.spacing.base,
        gap: theme.spacing.none,
      },
      faqStoryMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
      },
      faqStoryLabel: {
        color: theme.colors.jameel.accent,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      faqCopy: {
        padding: theme.spacing.base,
        gap: theme.spacing.md,
      },
      faqTitle: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      faqBody: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      faqCta: {
        flex: theme.layout.screenFlex,
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
      },
      faqDuration: {
        color: theme.colors.textOnDark,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.small,
        lineHeight: theme.typography.lineHeights.small,
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
        fontFamily: theme.typography.fontFamilies.bold,
        fontSize: theme.typography.sizes.cardTitle,
        lineHeight: theme.typography.lineHeights.cardTitle,
      },
      closingBody: {
        color: theme.colors.textMuted,
        fontFamily: theme.typography.fontFamilies.regular,
        fontSize: theme.typography.sizes.body,
        lineHeight: theme.typography.lineHeights.body,
      },
      closingActions: {
        gap: theme.spacing.md,
      },
      button: {
        minHeight: theme.layout.ctaMinHeight,
        borderRadius: theme.radii.cta,
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
      selectorHitSlop: {
        bottom: (theme.layout.headerControlMinHeight - theme.layout.filterChipMinHeight) / 2,
        left: theme.spacing.sm,
        right: theme.spacing.sm,
        top: (theme.layout.headerControlMinHeight - theme.layout.filterChipMinHeight) / 2,
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
      heroPetrolScrim: {
        colors: theme.colors.heroPetrolScrim,
        end: theme.gradient.heroPetrolScrim.end,
        locations: theme.gradient.heroPetrolScrim.locations,
        start: theme.gradient.heroPetrolScrim.start,
      },
      faqCarouselCardWidth,
      faqCarouselSideOffset,
      faqCardStackOrderActive: {
        zIndex: 3,
        elevation: 3,
      },
      faqCardStackOrderSide: {
        zIndex: 1,
        elevation: 1,
      },
    },
  };
}
