import { createMockApiClient } from '@/lib/mock-api-client';

import type { AppServices } from '../types';
import { createMockVehicleCatalogService } from './vehicle-catalog';

export function createMockServices(): AppServices {
  return {
    apiClient: createMockApiClient(),
    vehicleCatalog: createMockVehicleCatalogService(),
  };
}

export const mockServices = createMockServices();
