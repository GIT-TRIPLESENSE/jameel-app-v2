import { useRouter } from 'expo-router';

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

  return null;
}

export default function IndexRoute() {
  const router = useRouter();

  const handleAction = (action: PrototypeAction) => {
    const route = getRouteForHomeAction(action);

    if (route) {
      router.push(route);
    }
  };

  return <JameelHomeScreen onAction={handleAction} />;
}
