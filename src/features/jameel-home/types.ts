import type { LucideIcon } from 'lucide-react-native';
import type { ImageSourcePropType } from 'react-native';

export type PrototypeAction =
  | 'discover-geely'
  | 'discover-zeekr'
  | 'open-membership'
  | 'open-network'
  | 'start-quiz'
  | 'watch-video'
  | 'secondary';

export type BrandEntry = {
  id: 'zeekr' | 'geely';
  logoKey: string;
  logoSource: ImageSourcePropType;
  titleAccentKey: string;
  titleRestKey: string;
  ctaKey: string;
  imageUri: string;
  imageAltKey: string;
  vehicleSource: ImageSourcePropType;
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

export type HomeSolutionPath = {
  id: 'geely' | 'zeekr' | 'guided';
  action: PrototypeAction;
  accentRole: 'geely' | 'zeekr' | 'jameel';
  bodyKey: string;
  ctaKey: string;
  imageAltKey: string;
  imageUri: string;
  metaKey: string;
  titleKey: string;
};

export type JourneyStep = {
  id: 'before' | 'during' | 'after';
  bodyKey: string;
  icon: LucideIcon;
  labelKey: string;
  titleKey: string;
};

export type GuideHighlight = {
  id: 'brands' | 'network' | 'services' | 'membership';
  labelKey: string;
};

export type PeopleRole = {
  id: 'consultants' | 'dealers' | 'customerCare';
  bodyKey: string;
  icon: LucideIcon;
  imageAltKey: string;
  imageUri: string;
  titleKey: string;
};

export type MembershipSignal = {
  id: 'experiences' | 'benefits';
  icon: LucideIcon;
  titleKey: string;
};

export type FaqVideo = {
  id: 'start' | 'vehicle' | 'network';
  bodyKey: string;
  ctaKey: string;
  durationKey: string;
  imageAltKey: string;
  imageUri: string;
  labelKey: string;
  titleKey: string;
};
