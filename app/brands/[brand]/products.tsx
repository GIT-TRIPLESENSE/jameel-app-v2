import { useLocalSearchParams, useRouter } from 'expo-router';

import type { BrandContextSelection } from '@/components';
import { NavigationPlaceholderScreen } from '@/components';
import { BrandProductsScreen, getBrandProductsRoute, isBrandId } from '@/features/brand-products';

export default function BrandProductsRoute() {
  const { brand } = useLocalSearchParams<{ brand?: string | string[] }>();
  const router = useRouter();
  const brandParam = Array.isArray(brand) ? brand[0] : brand;

  if (!isBrandId(brandParam)) {
    return <NavigationPlaceholderScreen titleKey="brandProducts.invalidBrand.title" />;
  }

  const handleBrandContextSelect = (selection: BrandContextSelection) => {
    if (selection === 'jameel') {
      router.push('/');
      return;
    }

    router.push(getBrandProductsRoute(selection));
  };

  return (
    <BrandProductsScreen brandId={brandParam} onBrandContextSelect={handleBrandContextSelect} />
  );
}
