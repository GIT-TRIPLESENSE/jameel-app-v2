import { createMockApiClient } from '@/lib/mock-api-client';

import type { AppServices } from '../types';
import { createMockDealerNetworkService } from './dealer-network';
import { createMockVehicleCatalogService } from './vehicle-catalog';

export function createMockServices(): AppServices {
  return {
    apiClient: createMockApiClient(),
    dealerNetwork: createMockDealerNetworkService(),
    vehicleCatalog: createMockVehicleCatalogService(),
  };
}

export const mockServices = createMockServices();
