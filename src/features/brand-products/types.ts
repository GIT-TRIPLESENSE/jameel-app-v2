import type { BrandId } from '@/services';

export type BrandProductsTheme = {
  brandId: BrandId;
  accentColor: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  filterChipTextActiveColor: string;
  headlineAccentColor: string;
  secondaryOnDarkColor: string;
  selectorLabelKey: string;
  headlineBrandKey: string;
  headlineRestKey: string;
};
