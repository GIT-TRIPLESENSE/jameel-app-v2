import type { BrandId } from '@/services';
import type { AppTheme } from '@/theme';

import type { DealerNetworkTheme } from './types';

export function isDealerNetworkBrandId(value: unknown): value is BrandId {
  return value === 'zeekr' || value === 'geely';
}

export function getDealerNetworkRoute(brandId: BrandId) {
  return {
    pathname: '/brands/[brand]/network',
    params: {
      brand: brandId,
    },
  } as const;
}

export function createDealerNetworkTheme(theme: AppTheme, brandId: BrandId): DealerNetworkTheme {
  const brandColors = theme.colors[brandId];

  return {
    brandId,
    accentColor: brandColors.accent,
    backgroundColor: brandColors.background,
    darkSurfaceColor: brandColors.primary,
    headlineAccentColor: brandId === 'geely' ? brandColors.primary : brandColors.accent,
    secondaryOnDarkColor:
      brandId === 'zeekr' ? theme.colors.zeekr.secondary : theme.colors.textOnDark,
    selectorLabelKey: `dealerNetwork.brands.${brandId}.selector`,
    headlineBrandKey: `dealerNetwork.brands.${brandId}.headlineBrand`,
    headlineRestKey: `dealerNetwork.brands.${brandId}.headlineRest`,
  };
}
