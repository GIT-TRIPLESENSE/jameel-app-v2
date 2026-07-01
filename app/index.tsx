import { useRouter } from 'expo-router';

import type { BrandContextSelection } from '@/components';
import { getBrandProductsRoute } from '@/features/brand-products';
import { JameelHomeScreen } from '@/features/jameel-home';
import type { PrototypeAction } from '@/features/jameel-home/types';

function getRouteForHomeAction(action: PrototypeAction) {
  if (action === 'discover-zeekr') {
    return getBrandProductsRoute('zeekr');
  }

  if (action === 'discover-geely') {
    return getBrandProductsRoute('geely');
  }

  if (action === 'open-network') {
    return '/network' as const;
  }

  if (action === 'open-membership') {
    return '/event' as const;
  }

  return null;
}

function getRouteForBrandContextSelection(selection: BrandContextSelection) {
  if (selection === 'jameel') {
    return '/' as const;
  }

  return getBrandProductsRoute(selection);
}

export default function IndexRoute() {
  const router = useRouter();

  const handleAction = (action: PrototypeAction) => {
    const route = getRouteForHomeAction(action);

    if (route) {
      router.push(route);
    }
  };

  const handleBrandContextSelect = (selection: BrandContextSelection) => {
    router.push(getRouteForBrandContextSelection(selection));
  };

  return (
    <JameelHomeScreen onAction={handleAction} onBrandContextSelect={handleBrandContextSelect} />
  );
}
