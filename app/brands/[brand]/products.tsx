import { useLocalSearchParams } from 'expo-router';

import { NavigationPlaceholderScreen } from '@/components';
import { BrandProductsScreen, isBrandId } from '@/features/brand-products';

export default function BrandProductsRoute() {
  const { brand } = useLocalSearchParams<{ brand?: string | string[] }>();
  const brandParam = Array.isArray(brand) ? brand[0] : brand;

  if (!isBrandId(brandParam)) {
    return <NavigationPlaceholderScreen titleKey="brandProducts.invalidBrand.title" />;
  }

  return <BrandProductsScreen brandId={brandParam} />;
}
