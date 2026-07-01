import type {
  ApiResponse,
  BrandDealerNetworkDto,
  BrandId,
  DealerNetworkFilterDto,
  DealerNetworkService,
} from '../types';

const dealerNetworkFilters: DealerNetworkFilterDto[] = [
  { id: 'all', labelKey: 'dealerNetwork.filters.all' },
  { id: 'dealer', labelKey: 'dealerNetwork.filters.dealer' },
  { id: 'workshop', labelKey: 'dealerNetwork.filters.workshop' },
];

const dealerNetworks: Record<BrandId, BrandDealerNetworkDto> = {
  zeekr: {
    brandId: 'zeekr',
    filters: dealerNetworkFilters,
    summary: {
      dealerCount: 2,
      workshopCount: 1,
      closestCityKey: 'dealerNetwork.locations.zeekrMilano.city',
    },
    locations: [
      {
        id: 'zeekr-milano',
        brandId: 'zeekr',
        type: 'dealer',
        nameKey: 'dealerNetwork.locations.zeekrMilano.name',
        cityKey: 'dealerNetwork.locations.zeekrMilano.city',
        addressKey: 'dealerNetwork.locations.zeekrMilano.address',
        distanceKm: 2.4,
        phone: '+39 02 1234 7201',
        openingHoursKey: 'dealerNetwork.hours.weekdays',
        certificationKey: 'dealerNetwork.certifications.zeekrCertified',
        capabilityKeys: [
          'dealerNetwork.capabilities.testDrive',
          'dealerNetwork.capabilities.evExpert',
          'dealerNetwork.capabilities.finance',
        ],
        ctaIds: ['contact', 'testDrive'],
        mapPosition: {
          xPercent: 28,
          yPercent: 34,
        },
      },
      {
        id: 'zeekr-roma-service',
        brandId: 'zeekr',
        type: 'workshop',
        nameKey: 'dealerNetwork.locations.zeekrRomaService.name',
        cityKey: 'dealerNetwork.locations.zeekrRomaService.city',
        addressKey: 'dealerNetwork.locations.zeekrRomaService.address',
        distanceKm: 5.8,
        phone: '+39 06 1234 7202',
        openingHoursKey: 'dealerNetwork.hours.service',
        certificationKey: 'dealerNetwork.certifications.authorizedWorkshop',
        capabilityKeys: [
          'dealerNetwork.capabilities.service',
          'dealerNetwork.capabilities.batteryCheck',
          'dealerNetwork.capabilities.roadside',
        ],
        ctaIds: ['contact', 'service'],
        mapPosition: {
          xPercent: 62,
          yPercent: 54,
        },
      },
      {
        id: 'zeekr-bologna',
        brandId: 'zeekr',
        type: 'dealer',
        nameKey: 'dealerNetwork.locations.zeekrBologna.name',
        cityKey: 'dealerNetwork.locations.zeekrBologna.city',
        addressKey: 'dealerNetwork.locations.zeekrBologna.address',
        distanceKm: 12.6,
        phone: '+39 051 1234 7203',
        openingHoursKey: 'dealerNetwork.hours.saturday',
        certificationKey: 'dealerNetwork.certifications.zeekrCertified',
        capabilityKeys: [
          'dealerNetwork.capabilities.testDrive',
          'dealerNetwork.capabilities.evExpert',
          'dealerNetwork.capabilities.delivery',
        ],
        ctaIds: ['contact', 'testDrive'],
        mapPosition: {
          xPercent: 44,
          yPercent: 72,
        },
      },
    ],
  },
  geely: {
    brandId: 'geely',
    filters: dealerNetworkFilters,
    summary: {
      dealerCount: 2,
      workshopCount: 1,
      closestCityKey: 'dealerNetwork.locations.geelyMilano.city',
    },
    locations: [
      {
        id: 'geely-milano',
        brandId: 'geely',
        type: 'dealer',
        nameKey: 'dealerNetwork.locations.geelyMilano.name',
        cityKey: 'dealerNetwork.locations.geelyMilano.city',
        addressKey: 'dealerNetwork.locations.geelyMilano.address',
        distanceKm: 3.1,
        phone: '+39 02 1234 7301',
        openingHoursKey: 'dealerNetwork.hours.weekdays',
        certificationKey: 'dealerNetwork.certifications.geelyCertified',
        capabilityKeys: [
          'dealerNetwork.capabilities.testDrive',
          'dealerNetwork.capabilities.evExpert',
          'dealerNetwork.capabilities.finance',
        ],
        ctaIds: ['contact', 'testDrive'],
        mapPosition: {
          xPercent: 34,
          yPercent: 30,
        },
      },
      {
        id: 'geely-torino-service',
        brandId: 'geely',
        type: 'workshop',
        nameKey: 'dealerNetwork.locations.geelyTorinoService.name',
        cityKey: 'dealerNetwork.locations.geelyTorinoService.city',
        addressKey: 'dealerNetwork.locations.geelyTorinoService.address',
        distanceKm: 9.7,
        phone: '+39 011 1234 7302',
        openingHoursKey: 'dealerNetwork.hours.service',
        certificationKey: 'dealerNetwork.certifications.authorizedWorkshop',
        capabilityKeys: [
          'dealerNetwork.capabilities.service',
          'dealerNetwork.capabilities.batteryCheck',
          'dealerNetwork.capabilities.warranty',
        ],
        ctaIds: ['contact', 'service'],
        mapPosition: {
          xPercent: 68,
          yPercent: 44,
        },
      },
      {
        id: 'geely-napoli',
        brandId: 'geely',
        type: 'dealer',
        nameKey: 'dealerNetwork.locations.geelyNapoli.name',
        cityKey: 'dealerNetwork.locations.geelyNapoli.city',
        addressKey: 'dealerNetwork.locations.geelyNapoli.address',
        distanceKm: 18.2,
        phone: '+39 081 1234 7303',
        openingHoursKey: 'dealerNetwork.hours.saturday',
        certificationKey: 'dealerNetwork.certifications.geelyCertified',
        capabilityKeys: [
          'dealerNetwork.capabilities.testDrive',
          'dealerNetwork.capabilities.evExpert',
          'dealerNetwork.capabilities.delivery',
        ],
        ctaIds: ['contact', 'testDrive'],
        mapPosition: {
          xPercent: 48,
          yPercent: 74,
        },
      },
    ],
  },
};

export function createMockDealerNetworkService(): DealerNetworkService {
  return {
    async getBrandDealerNetwork(brandId) {
      const network = dealerNetworks[brandId];

      if (!network) {
        return {
          ok: false,
          error: {
            code: 'NOT_FOUND',
            message: 'Dealer network was not found.',
          },
        };
      }

      return {
        ok: true,
        data: network,
      } satisfies ApiResponse<BrandDealerNetworkDto>;
    },
  };
}
