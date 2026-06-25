export type ServiceMode = 'mock' | 'bff';

function getServiceMode(value: string | undefined): ServiceMode {
  return value === 'bff' ? 'bff' : 'mock';
}

export const env = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? '',
  serviceMode: getServiceMode(process.env.EXPO_PUBLIC_SERVICE_MODE),
} as const;
