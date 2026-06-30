import { fireEvent, render } from '@testing-library/react-native';
import { describe, expect, it, jest } from '@jest/globals';

import { BottomNavigationBar, shouldShowBottomNavigation } from '@/components';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';

describe('BottomNavigationBar', () => {
  it('is hidden on the root homepage and visible on every other route', () => {
    expect(shouldShowBottomNavigation('/')).toBe(false);
    expect(shouldShowBottomNavigation('/home')).toBe(true);
    expect(shouldShowBottomNavigation('/products')).toBe(true);
    expect(shouldShowBottomNavigation('/network')).toBe(true);
    expect(shouldShowBottomNavigation('/support')).toBe(true);
    expect(shouldShowBottomNavigation('/event')).toBe(true);
  });

  it('renders the configured tabs and emits navigation requests', async () => {
    const onNavigate = jest.fn();

    const { getByLabelText, getByText } = await render(
      <AppProviders>
        <BottomNavigationBar activePath="/products" onNavigate={onNavigate} />
      </AppProviders>,
    );

    expect(getByText(i18n.t('navigation.bottom.home.label'))).toBeTruthy();
    expect(getByText(i18n.t('navigation.bottom.products.label'))).toBeTruthy();
    expect(getByText(i18n.t('navigation.bottom.network.label'))).toBeTruthy();
    expect(getByText(i18n.t('navigation.bottom.support.label'))).toBeTruthy();
    expect(getByText(i18n.t('navigation.bottom.event.label'))).toBeTruthy();

    fireEvent.press(getByLabelText(i18n.t('navigation.bottom.network.accessibilityLabel')));

    expect(onNavigate).toHaveBeenCalledWith('/network');
  });
});
