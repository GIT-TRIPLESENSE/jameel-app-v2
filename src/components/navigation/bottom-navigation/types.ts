import type { Href } from 'expo-router';
import type { LucideIcon } from 'lucide-react-native';

export type BottomNavigationItemId = 'home' | 'products' | 'network' | 'support' | 'event';

export type BottomNavigationItem = {
  id: BottomNavigationItemId;
  accessibilityLabelKey: string;
  href: Href;
  icon: LucideIcon;
  labelKey: string;
};
