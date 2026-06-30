import { render } from '@testing-library/react-native';
import { describe, expect, it } from '@jest/globals';

import IndexRoute from '@app/index';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';

describe('IndexRoute', () => {
  it('renders the Jameel Motors home prototype through i18n', async () => {
    const { getByText, queryByText } = await render(
      <AppProviders>
        <IndexRoute />
      </AppProviders>,
    );

    expect(getByText(i18n.t('jameelHome.hero.title'))).toBeTruthy();
    expect(getByText(i18n.t('jameelHome.brands.title'))).toBeTruthy();
    expect(queryByText(i18n.t('navigation.bottom.home.label'))).toBeNull();
  });
});
