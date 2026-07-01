import {
  BatteryCharging,
  CarFront,
  Headphones,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react-native';
import type { ImageSourcePropType } from 'react-native';

import type {
  BrandEntry,
  EcosystemStat,
  ExpertHubItem,
  FaqVideo,
  GuideHighlight,
  HomeSolutionPath,
  JourneyStep,
  MembershipSignal,
  PeopleRole,
  QuickAction,
  ScenarioCard,
  StoryCard,
} from './types';

const imageBaseParams = 'auto=format&fit=crop&q=80';

export const jameelHomeHeroImage =
  require('../../../assets/brand/jameel-home-hero.webp') as ImageSourcePropType;

export const jameelMembershipBackgroundImage =
  require('../../../assets/brand/jameel-membership-background.webp') as ImageSourcePropType;

export const brandCardAssets = {
  zeekrLogo: require('../../../assets/brand/zeekr-card-logo.png') as ImageSourcePropType,
  zeekrVehicle: require('../../../assets/brand/zeekr-card-vehicle.png') as ImageSourcePropType,
  geelyLogo: require('../../../assets/brand/geely-card-logo.png') as ImageSourcePropType,
  geelyVehicle: require('../../../assets/brand/geely-card-vehicle.png') as ImageSourcePropType,
} as const;

export const jameelHomeImages = {
  zeekr: `https://images.unsplash.com/photo-1503376780353-7e6692767b70?${imageBaseParams}&w=900`,
  geely: `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?${imageBaseParams}&w=900`,
  charging: `https://images.unsplash.com/photo-1744973248681-c4a388484b8c?${imageBaseParams}&w=1200`,
  service: `https://images.unsplash.com/photo-1486006920555-c77dcf18193c?${imageBaseParams}&w=900`,
  road: `https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?${imageBaseParams}&w=900`,
  guide: `https://images.unsplash.com/photo-1557804506-669a67965ba0?${imageBaseParams}&w=1200`,
  consultant: `https://images.unsplash.com/photo-1556761175-b413da4baf72?${imageBaseParams}&w=900`,
  customerCare: `https://images.unsplash.com/photo-1551434678-e076c223a692?${imageBaseParams}&w=900`,
  workshop: `https://images.unsplash.com/photo-1486006920555-c77dcf18193c?${imageBaseParams}&w=900`,
  dealer: `https://images.unsplash.com/photo-1560250097-0b93528c311a?${imageBaseParams}&w=900`,
} as const;

export const solutionPaths: HomeSolutionPath[] = [
  {
    id: 'geely',
    action: 'discover-geely',
    accentRole: 'geely',
    metaKey: 'jameelHome.solutions.geely.meta',
    titleKey: 'jameelHome.solutions.geely.title',
    bodyKey: 'jameelHome.solutions.geely.body',
    ctaKey: 'jameelHome.solutions.geely.cta',
    imageUri: jameelHomeImages.geely,
    imageAltKey: 'jameelHome.solutions.geely.imageAlt',
  },
  {
    id: 'zeekr',
    action: 'discover-zeekr',
    accentRole: 'zeekr',
    metaKey: 'jameelHome.solutions.zeekr.meta',
    titleKey: 'jameelHome.solutions.zeekr.title',
    bodyKey: 'jameelHome.solutions.zeekr.body',
    ctaKey: 'jameelHome.solutions.zeekr.cta',
    imageUri: jameelHomeImages.zeekr,
    imageAltKey: 'jameelHome.solutions.zeekr.imageAlt',
  },
  {
    id: 'guided',
    action: 'start-quiz',
    accentRole: 'jameel',
    metaKey: 'jameelHome.solutions.guided.meta',
    titleKey: 'jameelHome.solutions.guided.title',
    bodyKey: 'jameelHome.solutions.guided.body',
    ctaKey: 'jameelHome.solutions.guided.cta',
    imageUri: jameelHomeImages.charging,
    imageAltKey: 'jameelHome.solutions.guided.imageAlt',
  },
];

export const journeySteps: JourneyStep[] = [
  {
    id: 'before',
    icon: Zap,
    labelKey: 'jameelHome.journey.before.label',
    titleKey: 'jameelHome.journey.before.title',
    bodyKey: 'jameelHome.journey.before.body',
  },
  {
    id: 'during',
    icon: CarFront,
    labelKey: 'jameelHome.journey.during.label',
    titleKey: 'jameelHome.journey.during.title',
    bodyKey: 'jameelHome.journey.during.body',
  },
  {
    id: 'after',
    icon: Route,
    labelKey: 'jameelHome.journey.after.label',
    titleKey: 'jameelHome.journey.after.title',
    bodyKey: 'jameelHome.journey.after.body',
  },
];

export const guideHighlights: GuideHighlight[] = [
  { id: 'brands', labelKey: 'jameelHome.guide.highlights.brands' },
  { id: 'network', labelKey: 'jameelHome.guide.highlights.network' },
  { id: 'services', labelKey: 'jameelHome.guide.highlights.services' },
  { id: 'membership', labelKey: 'jameelHome.guide.highlights.membership' },
];

export const peopleRoles: PeopleRole[] = [
  {
    id: 'consultants',
    icon: Headphones,
    titleKey: 'jameelHome.people.consultants.title',
    bodyKey: 'jameelHome.people.consultants.body',
    imageUri: jameelHomeImages.consultant,
    imageAltKey: 'jameelHome.people.consultants.imageAlt',
  },
  {
    id: 'dealers',
    icon: Store,
    titleKey: 'jameelHome.people.dealers.title',
    bodyKey: 'jameelHome.people.dealers.body',
    imageUri: jameelHomeImages.dealer,
    imageAltKey: 'jameelHome.people.dealers.imageAlt',
  },
  {
    id: 'customerCare',
    icon: Headphones,
    titleKey: 'jameelHome.people.customerCare.title',
    bodyKey: 'jameelHome.people.customerCare.body',
    imageUri: jameelHomeImages.customerCare,
    imageAltKey: 'jameelHome.people.customerCare.imageAlt',
  },
];

export const membershipSignals: MembershipSignal[] = [
  {
    id: 'experiences',
    icon: MapPin,
    titleKey: 'jameelHome.membership.signals.experiences',
  },
  {
    id: 'benefits',
    icon: ShieldCheck,
    titleKey: 'jameelHome.membership.signals.benefits',
  },
];

export const faqVideos: FaqVideo[] = [
  {
    id: 'start',
    labelKey: 'jameelHome.faq.items.start.label',
    titleKey: 'jameelHome.faq.items.start.title',
    bodyKey: 'jameelHome.faq.items.start.body',
    ctaKey: 'jameelHome.faq.items.start.cta',
    durationKey: 'jameelHome.faq.items.start.duration',
    imageUri: jameelHomeImages.charging,
    imageAltKey: 'jameelHome.faq.items.start.imageAlt',
  },
  {
    id: 'vehicle',
    labelKey: 'jameelHome.faq.items.vehicle.label',
    titleKey: 'jameelHome.faq.items.vehicle.title',
    bodyKey: 'jameelHome.faq.items.vehicle.body',
    ctaKey: 'jameelHome.faq.items.vehicle.cta',
    durationKey: 'jameelHome.faq.items.vehicle.duration',
    imageUri: jameelHomeImages.road,
    imageAltKey: 'jameelHome.faq.items.vehicle.imageAlt',
  },
  {
    id: 'network',
    labelKey: 'jameelHome.faq.items.network.label',
    titleKey: 'jameelHome.faq.items.network.title',
    bodyKey: 'jameelHome.faq.items.network.body',
    ctaKey: 'jameelHome.faq.items.network.cta',
    durationKey: 'jameelHome.faq.items.network.duration',
    imageUri: jameelHomeImages.service,
    imageAltKey: 'jameelHome.faq.items.network.imageAlt',
  },
];

export const quickActions: QuickAction[] = [
  {
    id: 'test-drive',
    titleKey: 'jameelHome.quickActions.testDrive.title',
    accessibilityLabelKey: 'jameelHome.quickActions.testDrive.accessibilityLabel',
    icon: CarFront,
    action: 'secondary',
  },
  {
    id: 'dealer',
    titleKey: 'jameelHome.quickActions.dealer.title',
    accessibilityLabelKey: 'jameelHome.quickActions.dealer.accessibilityLabel',
    icon: MapPin,
    action: 'secondary',
  },
  {
    id: 'contact',
    titleKey: 'jameelHome.quickActions.contact.title',
    accessibilityLabelKey: 'jameelHome.quickActions.contact.accessibilityLabel',
    icon: Headphones,
    action: 'secondary',
  },
];

export const brandEntries: BrandEntry[] = [
  {
    id: 'zeekr',
    logoKey: 'jameelHome.brands.zeekr.logo',
    logoSource: brandCardAssets.zeekrLogo,
    titleAccentKey: 'jameelHome.brands.zeekr.titleAccent',
    titleRestKey: 'jameelHome.brands.zeekr.titleRest',
    ctaKey: 'jameelHome.brands.zeekr.cta',
    imageUri: jameelHomeImages.zeekr,
    imageAltKey: 'jameelHome.brands.zeekr.imageAlt',
    vehicleSource: brandCardAssets.zeekrVehicle,
    accentRole: 'zeekr',
    action: 'discover-zeekr',
  },
  {
    id: 'geely',
    logoKey: 'jameelHome.brands.geely.logo',
    logoSource: brandCardAssets.geelyLogo,
    titleAccentKey: 'jameelHome.brands.geely.titleAccent',
    titleRestKey: 'jameelHome.brands.geely.titleRest',
    ctaKey: 'jameelHome.brands.geely.cta',
    imageUri: jameelHomeImages.geely,
    imageAltKey: 'jameelHome.brands.geely.imageAlt',
    vehicleSource: brandCardAssets.geelyVehicle,
    accentRole: 'geely',
    action: 'discover-geely',
  },
];

export const scenarioCards: ScenarioCard[] = [
  {
    id: 'city',
    labelKey: 'jameelHome.scenarios.city.label',
    titleKey: 'jameelHome.scenarios.city.title',
    ctaKey: 'jameelHome.scenarios.city.cta',
    icon: Route,
    action: 'start-quiz',
  },
  {
    id: 'family',
    labelKey: 'jameelHome.scenarios.family.label',
    titleKey: 'jameelHome.scenarios.family.title',
    ctaKey: 'jameelHome.scenarios.family.cta',
    icon: Sparkles,
    action: 'discover-geely',
  },
  {
    id: 'premium',
    labelKey: 'jameelHome.scenarios.premium.label',
    titleKey: 'jameelHome.scenarios.premium.title',
    ctaKey: 'jameelHome.scenarios.premium.cta',
    icon: Zap,
    action: 'discover-zeekr',
  },
];

export const ecosystemStats: EcosystemStat[] = [
  {
    id: 'dealers',
    valueKey: 'jameelHome.ecosystem.dealers.value',
    labelKey: 'jameelHome.ecosystem.dealers.label',
    icon: Store,
  },
  {
    id: 'charging',
    valueKey: 'jameelHome.ecosystem.charging.value',
    labelKey: 'jameelHome.ecosystem.charging.label',
    icon: BatteryCharging,
  },
  {
    id: 'services',
    valueKey: 'jameelHome.ecosystem.services.value',
    labelKey: 'jameelHome.ecosystem.services.label',
    icon: Headphones,
  },
];

export const expertHubItems: ExpertHubItem[] = [
  {
    id: 'first-ev',
    questionKey: 'jameelHome.expertHub.items.firstEv.question',
    answerKey: 'jameelHome.expertHub.items.firstEv.answer',
    ctaKey: 'jameelHome.expertHub.items.firstEv.cta',
    action: 'start-quiz',
  },
  {
    id: 'support',
    questionKey: 'jameelHome.expertHub.items.support.question',
    answerKey: 'jameelHome.expertHub.items.support.answer',
    ctaKey: 'jameelHome.expertHub.items.support.cta',
    action: 'secondary',
  },
  {
    id: 'brand-choice',
    questionKey: 'jameelHome.expertHub.items.brandChoice.question',
    answerKey: 'jameelHome.expertHub.items.brandChoice.answer',
    ctaKey: 'jameelHome.expertHub.items.brandChoice.cta',
    action: 'secondary',
  },
];

export const storyCards: StoryCard[] = [
  {
    id: 'charging',
    badgeKey: 'jameelHome.stories.charging.badge',
    titleKey: 'jameelHome.stories.charging.title',
    bodyKey: 'jameelHome.stories.charging.body',
    imageUri: jameelHomeImages.charging,
    imageAltKey: 'jameelHome.stories.charging.imageAlt',
    size: 'large',
  },
  {
    id: 'service',
    badgeKey: 'jameelHome.stories.service.badge',
    titleKey: 'jameelHome.stories.service.title',
    imageUri: jameelHomeImages.service,
    imageAltKey: 'jameelHome.stories.service.imageAlt',
    size: 'small',
  },
  {
    id: 'road',
    badgeKey: 'jameelHome.stories.road.badge',
    titleKey: 'jameelHome.stories.road.title',
    imageUri: jameelHomeImages.road,
    imageAltKey: 'jameelHome.stories.road.imageAlt',
    size: 'small',
  },
];
