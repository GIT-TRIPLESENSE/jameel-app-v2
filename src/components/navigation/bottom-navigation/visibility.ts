import type { BrandId } from '@/services';

import type { BottomNavigationItem } from './types';

export function shouldShowBottomNavigation(pathname: string) {
  return pathname !== '/';
}

export function getBrandIdFromPathname(pathname: string): BrandId | undefined {
  const brandId = pathname.split('/')[2];

  if (brandId === 'zeekr' || brandId === 'geely') {
    return brandId;
  }

  return undefined;
}

export function isBottomNavigationItemActive(item: BottomNavigationItem, activePath: string) {
  const href = String(item.href);

  if (activePath === href || activePath.startsWith(`${href}/`)) {
    return true;
  }

  return item.id === 'products' && /^\/brands\/[^/]+\/products(\/|$)/.test(activePath);
}
