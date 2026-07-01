export type ApiRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiErrorCode =
  | 'NETWORK_ERROR'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'VALIDATION_ERROR'
  | 'NOT_IMPLEMENTED'
  | 'UNKNOWN_ERROR';

export type ApiResponseMeta = {
  requestId?: string;
};

export type ApiError = {
  code: ApiErrorCode;
  message: string;
  status?: number;
  details?: unknown;
};

export type ApiResponse<TData> =
  | {
      ok: true;
      data: TData;
      meta?: ApiResponseMeta;
    }
  | {
      ok: false;
      error: ApiError;
      meta?: ApiResponseMeta;
    };

export type ApiRequestOptions<TBody = unknown> = {
  path: string;
  method: ApiRequestMethod;
  body?: TBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

export type ApiClient = {
  request<TData, TBody = unknown>(options: ApiRequestOptions<TBody>): Promise<ApiResponse<TData>>;
};

export type BrandId = 'zeekr' | 'geely';

export type DealerNetworkFilterId = 'all' | 'dealer' | 'workshop';

export type DealerNetworkLocationType = 'dealer' | 'workshop';

export type DealerNetworkCtaId = 'contact' | 'testDrive' | 'service';

export type DealerNetworkFilterDto = {
  id: DealerNetworkFilterId;
  labelKey: string;
};

export type DealerNetworkMapPositionDto = {
  xPercent: number;
  yPercent: number;
};

export type DealerNetworkLocationDto = {
  id: string;
  brandId: BrandId;
  type: DealerNetworkLocationType;
  nameKey: string;
  cityKey: string;
  addressKey: string;
  distanceKm: number;
  phone: string;
  openingHoursKey: string;
  certificationKey: string;
  capabilityKeys: string[];
  ctaIds: DealerNetworkCtaId[];
  mapPosition: DealerNetworkMapPositionDto;
};

export type DealerNetworkSummaryDto = {
  dealerCount: number;
  workshopCount: number;
  closestCityKey: string;
};

export type BrandDealerNetworkDto = {
  brandId: BrandId;
  filters: DealerNetworkFilterDto[];
  locations: DealerNetworkLocationDto[];
  summary: DealerNetworkSummaryDto;
};

export type DealerNetworkService = {
  getBrandDealerNetwork(brandId: BrandId): Promise<ApiResponse<BrandDealerNetworkDto>>;
};

export type VehicleFilterId = 'all' | 'models' | 'services';

export type VehicleFilterDto = {
  id: VehicleFilterId;
  labelKey: string;
};

export type VehicleMetricDto = {
  id: string;
  labelKey: string;
  value: string;
};

export type VehicleTitleDto = {
  prefixKey: string;
  accentKey: string;
  suffixKey?: string;
};

export type VehiclePriceDto = {
  prefixKey: string;
  value: string;
  currency: string;
};

export type VehicleDto = {
  id: string;
  brandId: BrandId;
  title: VehicleTitleDto;
  summaryKey: string;
  imageUri: string;
  imageAltKey: string;
  price: VehiclePriceDto;
  filterIds: VehicleFilterId[];
  metrics: [VehicleMetricDto, VehicleMetricDto, VehicleMetricDto];
};

export type BrandCatalogDto = {
  brandId: BrandId;
  filters: VehicleFilterDto[];
  vehicles: VehicleDto[];
};

export type VehicleCatalogService = {
  getBrandCatalog(brandId: BrandId): Promise<ApiResponse<BrandCatalogDto>>;
};

export type AppServices = {
  apiClient: ApiClient;
  dealerNetwork: DealerNetworkService;
  vehicleCatalog: VehicleCatalogService;
};
