import { QueryClient } from '@tanstack/react-query';

export function createAppQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: process.env.NODE_ENV === 'test' ? Infinity : undefined,
        retry: false,
      },
    },
  });
}
