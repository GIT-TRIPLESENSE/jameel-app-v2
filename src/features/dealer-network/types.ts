import type { BrandId } from '@/services';

export type DealerNetworkTheme = {
  brandId: BrandId;
  accentColor: string;
  backgroundColor: string;
  darkSurfaceColor: string;
  headlineAccentColor: string;
  secondaryOnDarkColor: string;
  selectorLabelKey: string;
  headlineBrandKey: string;
  headlineRestKey: string;
};
