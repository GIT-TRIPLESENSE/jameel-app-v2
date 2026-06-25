import { createMockApiClient } from '@/lib/mock-api-client';

import type { AppServices } from '../types';

export function createMockServices(): AppServices {
  return {
    apiClient: createMockApiClient(),
  };
}

export const mockServices = createMockServices();
