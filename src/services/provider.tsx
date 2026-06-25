import { createContext, useContext, type PropsWithChildren } from 'react';

import { mockServices } from './mock';
import type { AppServices } from './types';

const ServicesContext = createContext<AppServices | null>(null);

type ServicesProviderProps = PropsWithChildren<{
  services?: AppServices;
}>;

export function ServicesProvider({ children, services = mockServices }: ServicesProviderProps) {
  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
}

export function useServices() {
  const services = useContext(ServicesContext);

  if (!services) {
    throw new Error('useServices must be used inside ServicesProvider.');
  }

  return services;
}
