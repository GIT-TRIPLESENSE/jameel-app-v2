import type { LucideIcon } from 'lucide-react-native';

export type PrototypeAction = 'discover-geely' | 'discover-zeekr' | 'start-quiz' | 'secondary';

export type BrandEntry = {
  id: 'zeekr' | 'geely';
  logoKey: string;
  titleAccentKey: string;
  titleRestKey: string;
  ctaKey: string;
  imageUri: string;
  imageAltKey: string;
  accentRole: 'zeekr' | 'geely';
  action: PrototypeAction;
};

export type QuickAction = {
  id: 'test-drive' | 'dealer' | 'contact';
  titleKey: string;
  accessibilityLabelKey: string;
  icon: LucideIcon;
  action: PrototypeAction;
};

export type ScenarioCard = {
  id: 'city' | 'family' | 'premium';
  labelKey: string;
  titleKey: string;
  ctaKey: string;
  icon: LucideIcon;
  action: PrototypeAction;
};

export type EcosystemStat = {
  id: 'dealers' | 'charging' | 'services';
  valueKey: string;
  labelKey: string;
  icon: LucideIcon;
};

export type ExpertHubItem = {
  id: 'first-ev' | 'support' | 'brand-choice';
  questionKey: string;
  answerKey: string;
  ctaKey: string;
  action: PrototypeAction;
};

export type StoryCard = {
  id: 'charging' | 'service' | 'road';
  badgeKey: string;
  titleKey: string;
  bodyKey?: string;
  imageUri: string;
  imageAltKey: string;
  size: 'large' | 'small';
};
