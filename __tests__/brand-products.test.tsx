import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { describe, expect, it, jest } from '@jest/globals';

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
    expect(await findByLabelText(i18n.t('brandProducts.filters.services'))).toBeTruthy();
    expect(queryByText(i18n.t('brandProducts.vehicles.geelyEx5Pro.summary'))).toBeNull();
  });

  it('keeps the Zeekr listing under the Models category', async () => {
    const { findAllByText, findByLabelText, findByText, getByText } = await render(
      <AppProviders>
        <BrandProductsScreen brandId="zeekr" />
      </AppProviders>,
    );

    expect(await findByText(i18n.t('brandProducts.brands.zeekr.headlineBrand'))).toBeTruthy();
    expect(await findAllByText(i18n.t('brandProducts.vehicles.zeekr7gt.titlePrefix'))).toHaveLength(
      2,
    );
    expect(getByText(i18n.t('brandProducts.vehicles.zeekr7gt.titleAccent'))).toBeTruthy();

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.filters.models')));

    await waitFor(() => {
      expect(getByText(i18n.t('brandProducts.vehicles.zeekr7gt.titleAccent'))).toBeTruthy();
      expect(getByText(i18n.t('brandProducts.vehicles.zeekr7x.titleAccent'))).toBeTruthy();
    });
  });

  it('marks the active brand and reports brand context selections', async () => {
    const onBrandContextSelect = jest.fn();
    const { findByLabelText } = await render(
      <AppProviders>
        <BrandProductsScreen brandId="geely" onBrandContextSelect={onBrandContextSelect} />
      </AppProviders>,
    );

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.header.selectorLabel')));

    expect(
      (
        await findByLabelText(
          i18n.t('brandSwitcher.optionLabel', {
            brand: i18n.t('brandSwitcher.options.geely'),
          }),
        )
      ).props.accessibilityState,
    ).toEqual({ selected: true });

    fireEvent.press(
      await findByLabelText(
        i18n.t('brandSwitcher.optionLabel', {
          brand: i18n.t('brandSwitcher.options.jameel'),
        }),
      ),
    );

    expect(onBrandContextSelect).toHaveBeenCalledWith('jameel');
  });
});
