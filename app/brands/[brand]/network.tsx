import { useLocalSearchParams, useRouter } from 'expo-router';

import type { BrandContextSelection } from '@/components';
import { NavigationPlaceholderScreen } from '@/components';
import {
  DealerNetworkScreen,
  getDealerNetworkRoute,
  isDealerNetworkBrandId,
} from '@/features/dealer-network';

export default function BrandNetworkRoute() {
  const { brand } = useLocalSearchParams<{ brand?: string | string[] }>();
  const router = useRouter();
  const brandParam = Array.isArray(brand) ? brand[0] : brand;

  if (!isDealerNetworkBrandId(brandParam)) {
    return <NavigationPlaceholderScreen titleKey="dealerNetwork.invalidBrand.title" />;
  }

  const handleBrandContextSelect = (selection: BrandContextSelection) => {
    if (selection === 'jameel') {
      router.push('/');
      return;
    }

    router.push(getDealerNetworkRoute(selection));
  };

  return (
    <DealerNetworkScreen brandId={brandParam} onBrandContextSelect={handleBrandContextSelect} />
  );
}
