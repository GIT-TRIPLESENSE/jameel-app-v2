import type { Href } from 'expo-router';
import { CalendarDays, CarFront, Home, MapPin, Wrench } from 'lucide-react-native';

import type { BrandId } from '@/services';

import type { BottomNavigationItem } from './types';

function createHref(pathname: string): Href {
  return pathname as Href;
}

function createTabHref(
  tab: 'home' | 'products' | 'network' | 'support' | 'event',
  brandId?: BrandId,
) {
  return createHref(brandId ? `/brands/${brandId}/${tab}` : `/${tab}`);
}

export function createBottomNavigationItems(brandId?: BrandId): BottomNavigationItem[] {
  return [
    {
      id: 'home',
      accessibilityLabelKey: 'navigation.bottom.home.accessibilityLabel',
      href: createTabHref('home', brandId),
      icon: Home,
      labelKey: 'navigation.bottom.home.label',
    },
    {
      id: 'products',
      accessibilityLabelKey: 'navigation.bottom.products.accessibilityLabel',
      href: createTabHref('products', brandId),
      icon: CarFront,
      labelKey: 'navigation.bottom.products.label',
    },
    {
      id: 'network',
      accessibilityLabelKey: 'navigation.bottom.network.accessibilityLabel',
      href: createTabHref('network', brandId),
      icon: MapPin,
      labelKey: 'navigation.bottom.network.label',
    },
    {
      id: 'support',
      accessibilityLabelKey: 'navigation.bottom.support.accessibilityLabel',
      href: createTabHref('support', brandId),
      icon: Wrench,
      labelKey: 'navigation.bottom.support.label',
    },
    {
      id: 'event',
      accessibilityLabelKey: 'navigation.bottom.event.accessibilityLabel',
      href: createTabHref('event', brandId),
      icon: CalendarDays,
      labelKey: 'navigation.bottom.event.label',
    },
  ];
}

export const bottomNavigationItems = createBottomNavigationItems();
