import { render } from '@testing-library/react-native';
import { describe, expect, it } from '@jest/globals';

import IndexRoute from '@app/index';
import { i18n } from '@/i18n';
import { AppProviders } from '@/lib/providers';

describe('IndexRoute', () => {
  it('renders the architecture placeholder through i18n', async () => {
    const { getByText } = await render(
      <AppProviders>
        <IndexRoute />
      </AppProviders>,
    );

    expect(getByText(i18n.t('scaffold.placeholderTitle'))).toBeTruthy();
  });
});
