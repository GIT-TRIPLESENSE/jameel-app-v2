import type { ApiClient, ApiResponse } from '@/services/types';

export function createMockApiClient(): ApiClient {
  return {
    async request<TData>(): Promise<ApiResponse<TData>> {
      return {
        ok: false,
        error: {
          code: 'NOT_IMPLEMENTED',
          message: 'TODO(product.md): Define mock responses for this service call.',
        },
      };
    },
  };
}
