import { useQuery } from '@tanstack/react-query';

import { useServices, type ApiError, type BrandDealerNetworkDto, type BrandId } from '@/services';

export function useDealerNetwork(brandId: BrandId) {
  const { dealerNetwork } = useServices();

  return useQuery<BrandDealerNetworkDto, ApiError>({
    queryKey: ['dealer-network', brandId],
    queryFn: async () => {
      const response = await dealerNetwork.getBrandDealerNetwork(brandId);

      if (!response.ok) {
        throw response.error;
      }

      return response.data;
    },
  });
}
