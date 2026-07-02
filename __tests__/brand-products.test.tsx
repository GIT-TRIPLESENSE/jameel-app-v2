import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { describe, expect, it, jest } from '@jest/globals';
import { StyleSheet } from 'react-native';

import { BrandProductsScreen } from '@/features/brand-products';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';
import { themeTokens } from '@/theme';

describe('BrandProductsScreen', () => {
  it('renders a Geely product listing from the mock catalog service', async () => {
    const { findByLabelText, findByText, queryByLabelText, queryByText } = await render(
      <AppProviders>
        <BrandProductsScreen brandId="geely" />
      </AppProviders>,
    );

    const geelyHeadline = await findByText(i18n.t('brandProducts.brands.geely.headlineBrand'));

    expect(StyleSheet.flatten(geelyHeadline.props.style).color).toBe(
      themeTokens.colors.geely.accent,
    );
    expect(await findByText(i18n.t('brandProducts.vehicles.geelyEx5Pro.titleSuffix'))).toBeTruthy();
    expect(
      (await findByLabelText(i18n.t('brandProducts.filters.vehicles'))).props.accessibilityState,
    ).toEqual({ selected: true });
    expect(await findByLabelText(i18n.t('brandProducts.filters.services'))).toBeTruthy();
    expect(queryByText('Models')).toBeNull();
    expect(queryByLabelText('All')).toBeNull();
    expect(queryByLabelText(i18n.t('brandProducts.header.profileLabel'))).toBeNull();
    expect(queryByText(i18n.t('brandProducts.vehicles.geelyEx5Pro.summary'))).toBeNull();
  });

  it('keeps the Zeekr listing under the Vehicles category', async () => {
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

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.filters.vehicles')));

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
