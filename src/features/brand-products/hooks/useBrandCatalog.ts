import { useQuery } from '@tanstack/react-query';

import { useServices, type ApiError, type BrandCatalogDto, type BrandId } from '@/services';

export function useBrandCatalog(brandId: BrandId) {
  const { vehicleCatalog } = useServices();

  return useQuery<BrandCatalogDto, ApiError>({
    queryKey: ['brand-catalog', brandId],
    queryFn: async () => {
      const response = await vehicleCatalog.getBrandCatalog(brandId);

      if (!response.ok) {
        throw response.error;
      }

      return response.data;
    },
  });
}
