import { CalendarDays, CarFront, Home, MapPin, Wrench } from 'lucide-react-native';

import type { BottomNavigationItem } from './types';

export const bottomNavigationItems: BottomNavigationItem[] = [
  {
    id: 'home',
    accessibilityLabelKey: 'navigation.bottom.home.accessibilityLabel',
    href: '/home',
    icon: Home,
    labelKey: 'navigation.bottom.home.label',
  },
  {
    id: 'products',
    accessibilityLabelKey: 'navigation.bottom.products.accessibilityLabel',
    href: '/products',
    icon: CarFront,
    labelKey: 'navigation.bottom.products.label',
  },
  {
    id: 'network',
    accessibilityLabelKey: 'navigation.bottom.network.accessibilityLabel',
    href: '/network',
    icon: MapPin,
    labelKey: 'navigation.bottom.network.label',
  },
  {
    id: 'support',
    accessibilityLabelKey: 'navigation.bottom.support.accessibilityLabel',
    href: '/support',
    icon: Wrench,
    labelKey: 'navigation.bottom.support.label',
  },
  {
    id: 'event',
    accessibilityLabelKey: 'navigation.bottom.event.accessibilityLabel',
    href: '/event',
    icon: CalendarDays,
    labelKey: 'navigation.bottom.event.label',
  },
];
