import type { BrandId } from '@/services';
import type { AppTheme } from '@/theme';

import type { BrandProductsTheme } from './types';

export function isBrandId(value: unknown): value is BrandId {
  return value === 'zeekr' || value === 'geely';
}

export function getBrandProductsRoute(brandId: BrandId) {
  return {
    pathname: '/brands/[brand]/products',
    params: {
      brand: brandId,
    },
  } as const;
}

export function createBrandProductsTheme(theme: AppTheme, brandId: BrandId): BrandProductsTheme {
  const brandColors = theme.colors[brandId];

  return {
    brandId,
    accentColor: brandColors.accent,
    backgroundColor: brandColors.background,
    cardBackgroundColor: brandColors.primary,
    filterChipTextActiveColor:
      brandId === 'zeekr' ? theme.colors.textOnDark : theme.colors.textOnAccent,
    headlineAccentColor: brandColors.accent,
    secondaryOnDarkColor:
      brandId === 'zeekr' ? theme.colors.zeekr.secondary : theme.colors.textOnDark,
    selectorLabelKey: `brandProducts.brands.${brandId}.selector`,
    headlineBrandKey: `brandProducts.brands.${brandId}.headlineBrand`,
    headlineRestKey: `brandProducts.brands.${brandId}.headlineRest`,
  };
}
