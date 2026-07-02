import { fireEvent, render } from '@testing-library/react-native';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';

import BrandProductsRoute from '@app/brands/[brand]/products';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';

const mockReplace = jest.fn();
let mockBrandParam = 'zeekr';

jest.mock('expo-router', () => ({
  useLocalSearchParams: () => ({
    brand: mockBrandParam,
  }),
  useRouter: () => ({
    replace: mockReplace,
  }),
}));

describe('BrandProductsRoute', () => {
  beforeEach(() => {
    mockBrandParam = 'zeekr';
    mockReplace.mockClear();
  });

  it('routes the brand selector Jameel option to the Jameel home', async () => {
    const { findByLabelText } = await render(
      <AppProviders>
        <BrandProductsRoute />
      </AppProviders>,
    );

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.header.selectorLabel')));
    fireEvent.press(
      await findByLabelText(
        i18n.t('brandSwitcher.optionLabel', {
          brand: i18n.t('brandSwitcher.options.jameel'),
        }),
      ),
    );

    expect(mockReplace).toHaveBeenCalledWith('/');
  });

  it('routes the brand selector from Zeekr to the Geely products page', async () => {
    const { findByLabelText } = await render(
      <AppProviders>
        <BrandProductsRoute />
      </AppProviders>,
    );

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.header.selectorLabel')));
    fireEvent.press(
      await findByLabelText(
        i18n.t('brandSwitcher.optionLabel', {
          brand: i18n.t('brandSwitcher.options.geely'),
        }),
      ),
    );

    expect(mockReplace).toHaveBeenCalledWith('/brands/geely/products');
  });

  it('routes the brand selector from Geely to the Zeekr products page', async () => {
    mockBrandParam = 'geely';

    const { findByLabelText } = await render(
      <AppProviders>
        <BrandProductsRoute />
      </AppProviders>,
    );

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.header.selectorLabel')));
    fireEvent.press(
      await findByLabelText(
        i18n.t('brandSwitcher.optionLabel', {
          brand: i18n.t('brandSwitcher.options.zeekr'),
        }),
      ),
    );

    expect(mockReplace).toHaveBeenCalledWith('/brands/zeekr/products');
  });

  it('does not re-route when selecting the already active brand', async () => {
    const { findByLabelText } = await render(
      <AppProviders>
        <BrandProductsRoute />
      </AppProviders>,
    );

    fireEvent.press(await findByLabelText(i18n.t('brandProducts.header.selectorLabel')));
    fireEvent.press(
      await findByLabelText(
        i18n.t('brandSwitcher.optionLabel', {
          brand: i18n.t('brandSwitcher.options.zeekr'),
        }),
      ),
    );

    expect(mockReplace).not.toHaveBeenCalled();
  });
});
