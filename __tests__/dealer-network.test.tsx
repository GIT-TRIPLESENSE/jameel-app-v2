import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { describe, expect, it, jest } from '@jest/globals';

import { DealerNetworkScreen } from '@/features/dealer-network';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';

describe('DealerNetworkScreen', () => {
  it('renders a Geely dealer network from the mock service', async () => {
    const { findAllByText, findByLabelText, findByText, queryByLabelText } = await render(
      <AppProviders>
        <DealerNetworkScreen brandId="geely" />
      </AppProviders>,
    );

    expect(await findByText(i18n.t('dealerNetwork.brands.geely.headlineBrand'))).toBeTruthy();
    expect(await findAllByText(i18n.t('dealerNetwork.locations.geelyMilano.name'))).toBeTruthy();
    expect(await findByLabelText(i18n.t('dealerNetwork.search.accessibilityLabel'))).toBeTruthy();
    expect(await findByText(i18n.t('dealerNetwork.map.title'))).toBeTruthy();
    expect(queryByLabelText(i18n.t('dealerNetwork.header.profileLabel'))).toBeNull();
  });

  it('filters the Zeekr network to workshops', async () => {
    const { findAllByText, findByLabelText, getAllByText, queryByText } = await render(
      <AppProviders>
        <DealerNetworkScreen brandId="zeekr" />
      </AppProviders>,
    );

    expect(await findAllByText(i18n.t('dealerNetwork.locations.zeekrMilano.name'))).toBeTruthy();

    fireEvent.press(await findByLabelText(i18n.t('dealerNetwork.filters.workshop')));

    await waitFor(() => {
      expect(getAllByText(i18n.t('dealerNetwork.locations.zeekrRomaService.name'))).toBeTruthy();
      expect(queryByText(i18n.t('dealerNetwork.locations.zeekrMilano.name'))).toBeNull();
    });
  });

  it('supports manual city search when location access is not used', async () => {
    const { findByLabelText, getAllByText, queryByText } = await render(
      <AppProviders>
        <DealerNetworkScreen brandId="geely" />
      </AppProviders>,
    );

    fireEvent.changeText(
      await findByLabelText(i18n.t('dealerNetwork.search.accessibilityLabel')),
      i18n.t('dealerNetwork.locations.geelyTorinoService.city'),
    );

    await waitFor(() => {
      expect(getAllByText(i18n.t('dealerNetwork.locations.geelyTorinoService.name'))).toBeTruthy();
      expect(queryByText(i18n.t('dealerNetwork.locations.geelyNapoli.name'))).toBeNull();
    });
  });

  it('opens brand context selections from the network header', async () => {
    const onBrandContextSelect = jest.fn();
    const { findByLabelText } = await render(
      <AppProviders>
        <DealerNetworkScreen brandId="zeekr" onBrandContextSelect={onBrandContextSelect} />
      </AppProviders>,
    );

    fireEvent.press(await findByLabelText(i18n.t('dealerNetwork.header.selectorLabel')));
    fireEvent.press(
      await findByLabelText(
        i18n.t('brandSwitcher.optionLabel', {
          brand: i18n.t('brandSwitcher.options.geely'),
        }),
      ),
    );

    expect(onBrandContextSelect).toHaveBeenCalledWith('geely');
  });
});
