import type { ApiResponse, BrandCatalogDto, BrandId, VehicleCatalogService } from '../types';

const imageBaseParams = 'auto=format&fit=crop&q=82';

const brandCatalogs: Record<BrandId, BrandCatalogDto> = {
  zeekr: {
    brandId: 'zeekr',
    filters: [
      { id: 'all', labelKey: 'brandProducts.filters.all' },
      { id: 'suv', labelKey: 'brandProducts.filters.suv' },
      { id: 'shootingBrake', labelKey: 'brandProducts.filters.shootingBrake' },
      { id: 'electric', labelKey: 'brandProducts.filters.electric' },
    ],
    vehicles: [
      {
        id: 'zeekr-7gt',
        brandId: 'zeekr',
        title: {
          prefixKey: 'brandProducts.vehicles.zeekr7gt.titlePrefix',
          accentKey: 'brandProducts.vehicles.zeekr7gt.titleAccent',
        },
        summaryKey: 'brandProducts.vehicles.zeekr7gt.summary',
        imageUri: `https://images.unsplash.com/photo-1503376780353-7e6692767b70?${imageBaseParams}&w=1200`,
        imageAltKey: 'brandProducts.vehicles.zeekr7gt.imageAlt',
        price: {
          prefixKey: 'brandProducts.price.from',
          value: '47.500',
          currency: 'EUR',
        },
        filterIds: ['shootingBrake', 'electric'],
        metrics: [
          { id: 'range', labelKey: 'brandProducts.metrics.range', value: '655 km' },
          { id: 'power', labelKey: 'brandProducts.metrics.power', value: '475 kW' },
          { id: 'acceleration', labelKey: 'brandProducts.metrics.acceleration', value: '3.3 s' },
        ],
      },
      {
        id: 'zeekr-7x',
        brandId: 'zeekr',
        title: {
          prefixKey: 'brandProducts.vehicles.zeekr7x.titlePrefix',
          accentKey: 'brandProducts.vehicles.zeekr7x.titleAccent',
        },
        summaryKey: 'brandProducts.vehicles.zeekr7x.summary',
        imageUri: `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?${imageBaseParams}&w=1200`,
        imageAltKey: 'brandProducts.vehicles.zeekr7x.imageAlt',
        price: {
          prefixKey: 'brandProducts.price.from',
          value: '54.100',
          currency: 'EUR',
        },
        filterIds: ['suv', 'electric'],
        metrics: [
          { id: 'range', labelKey: 'brandProducts.metrics.range', value: '615 km' },
          { id: 'power', labelKey: 'brandProducts.metrics.power', value: '475 kW' },
          { id: 'acceleration', labelKey: 'brandProducts.metrics.acceleration', value: '2.9 s' },
        ],
      },
    ],
  },
  geely: {
    brandId: 'geely',
    filters: [
      { id: 'all', labelKey: 'brandProducts.filters.all' },
      { id: 'suv', labelKey: 'brandProducts.filters.suv' },
      { id: 'electric', labelKey: 'brandProducts.filters.electric' },
      { id: 'ex5', labelKey: 'brandProducts.filters.ex5' },
    ],
    vehicles: [
      {
        id: 'geely-ex5-pro',
        brandId: 'geely',
        title: {
          prefixKey: 'brandProducts.vehicles.geelyEx5Pro.titlePrefix',
          accentKey: 'brandProducts.vehicles.geelyEx5Pro.titleAccent',
          suffixKey: 'brandProducts.vehicles.geelyEx5Pro.titleSuffix',
        },
        summaryKey: 'brandProducts.vehicles.geelyEx5Pro.summary',
        imageUri: `https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?${imageBaseParams}&w=1200`,
        imageAltKey: 'brandProducts.vehicles.geelyEx5Pro.imageAlt',
        price: {
          prefixKey: 'brandProducts.price.from',
          value: '35.900',
          currency: 'EUR',
        },
        filterIds: ['suv', 'electric', 'ex5'],
        metrics: [
          { id: 'range', labelKey: 'brandProducts.metrics.range', value: '430 km' },
          { id: 'power', labelKey: 'brandProducts.metrics.power', value: '160 kW' },
          { id: 'charge', labelKey: 'brandProducts.metrics.charge', value: '20 min' },
        ],
      },
      {
        id: 'geely-ex5-launch',
        brandId: 'geely',
        title: {
          prefixKey: 'brandProducts.vehicles.geelyEx5Launch.titlePrefix',
          accentKey: 'brandProducts.vehicles.geelyEx5Launch.titleAccent',
          suffixKey: 'brandProducts.vehicles.geelyEx5Launch.titleSuffix',
        },
        summaryKey: 'brandProducts.vehicles.geelyEx5Launch.summary',
        imageUri: `https://images.unsplash.com/photo-1502877338535-766e1452684a?${imageBaseParams}&w=1200`,
        imageAltKey: 'brandProducts.vehicles.geelyEx5Launch.imageAlt',
        price: {
          prefixKey: 'brandProducts.price.from',
          value: '38.900',
          currency: 'EUR',
        },
        filterIds: ['suv', 'electric', 'ex5'],
        metrics: [
          { id: 'range', labelKey: 'brandProducts.metrics.range', value: '410 km' },
          { id: 'comfort', labelKey: 'brandProducts.metrics.comfort', value: 'HUD 13.8"' },
          { id: 'audio', labelKey: 'brandProducts.metrics.audio', value: '16 speakers' },
        ],
      },
    ],
  },
};

export function createMockVehicleCatalogService(): VehicleCatalogService {
  return {
    async getBrandCatalog(brandId) {
      const catalog = brandCatalogs[brandId];

      if (!catalog) {
        return {
          ok: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Brand catalog was not found.',
          },
        };
      }

      return {
        ok: true,
        data: catalog,
      } satisfies ApiResponse<BrandCatalogDto>;
    },
  };
}
