import { QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { useState, type PropsWithChildren } from 'react';

import { i18n } from '@/i18n';
import { mockServices, ServicesProvider, type AppServices } from '@/services';
import { ThemeProvider } from '@/theme';

import { createAppQueryClient } from './query-client';

type AppProvidersProps = PropsWithChildren<{
  services?: AppServices;
}>;

export function AppProviders({ children, services = mockServices }: AppProvidersProps) {
  const [queryClient] = useState(createAppQueryClient);

  return (
    <I18nextProvider i18n={i18n}>
      <ServicesProvider services={services}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryClientProvider>
      </ServicesProvider>
    </I18nextProvider>
  );
}
