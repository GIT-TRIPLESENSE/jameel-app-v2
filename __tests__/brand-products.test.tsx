import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { describe, expect, it } from '@jest/globals';

import { BrandProductsScreen } from '@/features/brand-products';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';

describe('BrandProductsScreen', () => {
  it('renders a Geely product listing from the mock catalog service', async () => {
    const { findByLabelText, findByText, queryByText } = await render(
      <AppProviders>
        <BrandProductsScreen brandId="geely" />
      </AppProviders>,
    );

    expect(await findByText(i18n.t('brandProducts.brands.geely.headlineBrand'))).toBeTruthy();
    expect(await findByText(i18n.t('brandProducts.vehicles.geelyEx5Pro.titleSuffix'))).toBeTruthy();
    expect(await findByLabelText(i18n.t('brandProducts.filters.ex5'))).toBeTruthy();
    expect(queryByText(i18n.t('brandProducts.vehicles.geelyEx5Pro.summary'))).toBeNull();
  });

  it('filters the Zeekr listing without changing the branded screen shell', async () => {
    const { findAllByText, findByLabelText, findByText, getByText, queryByText } = await render(
      <AppProviders>
        <BrandProductsScreen brandId="zeekr" />
      </AppProviders>,
    );

    expect(await findByText(i18n.t('brandProducts.brands.zeekr.headlineBrand'))).toBeTruthy();
    expect(await findAllByText(i18n.t('brandProducts.vehicles.zeekr7gt.titlePrefix'))).toHaveLength(
      2,
    );
    expect(getByText(i18n.t('brandProducts.vehicles.zeekr7gt.titleAccent'))).toBeTruthy();

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.filters.suv')));

    await waitFor(() => {
      expect(getByText(i18n.t('brandProducts.vehicles.zeekr7x.titleAccent'))).toBeTruthy();
      expect(queryByText(i18n.t('brandProducts.vehicles.zeekr7gt.titleAccent'))).toBeNull();
    });
  });
});
