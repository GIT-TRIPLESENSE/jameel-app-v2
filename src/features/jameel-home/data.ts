import {
  BatteryCharging,
  CarFront,
  Headphones,
  MapPin,
  Route,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react-native';

import type {
  BrandEntry,
  EcosystemStat,
  ExpertHubItem,
  QuickAction,
  ScenarioCard,
  StoryCard,
} from './types';

const imageBaseParams = 'auto=format&fit=crop&q=80';

export const jameelHomeImages = {
  hero: 'https://images.unsplash.com/photo-1609775114712-5a7439494beb?auto=format&fit=crop&w=1400&q=80',
  zeekr: `https://images.unsplash.com/photo-1503376780353-7e6692767b70?${imageBaseParams}&w=900`,
  geely: `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?${imageBaseParams}&w=900`,
  charging: `https://images.unsplash.com/photo-1744973248681-c4a388484b8c?${imageBaseParams}&w=1200`,
  service: `https://images.unsplash.com/photo-1486006920555-c77dcf18193c?${imageBaseParams}&w=900`,
  road: `https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?${imageBaseParams}&w=900`,
} as const;

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
    titleAccentKey: 'jameelHome.brands.zeekr.titleAccent',
    titleRestKey: 'jameelHome.brands.zeekr.titleRest',
    ctaKey: 'jameelHome.brands.zeekr.cta',
    imageUri: jameelHomeImages.zeekr,
    imageAltKey: 'jameelHome.brands.zeekr.imageAlt',
    accentRole: 'zeekr',
    action: 'discover-zeekr',
  },
  {
    id: 'geely',
    logoKey: 'jameelHome.brands.geely.logo',
    titleAccentKey: 'jameelHome.brands.geely.titleAccent',
    titleRestKey: 'jameelHome.brands.geely.titleRest',
    ctaKey: 'jameelHome.brands.geely.cta',
    imageUri: jameelHomeImages.geely,
    imageAltKey: 'jameelHome.brands.geely.imageAlt',
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
