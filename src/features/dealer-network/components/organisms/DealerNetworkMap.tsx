import { MapPin, Store, Wrench } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { DealerNetworkLocationDto, DealerNetworkSummaryDto } from '@/services';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkMapProps = {
  activeLocationId?: string;
  locations: DealerNetworkLocationDto[];
  onSelectLocation: (locationId: string) => void;
  styles: DealerNetworkStyles;
  summary: DealerNetworkSummaryDto;
};

export function DealerNetworkMap({
  activeLocationId,
  locations,
  onSelectLocation,
  styles,
  summary,
}: DealerNetworkMapProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.mapPanel}>
      <View style={styles.mapPanelHeader}>
        <Text style={styles.mapTitle}>{t('dealerNetwork.map.title')}</Text>
        <Text style={styles.mapSummary}>
          {t('dealerNetwork.map.summary', {
            closestCity: t(summary.closestCityKey),
            dealerCount: summary.dealerCount,
            workshopCount: summary.workshopCount,
          })}
        </Text>
      </View>

      <View accessibilityLabel={t('dealerNetwork.map.accessibilityLabel')} style={styles.mapCanvas}>
        <View pointerEvents="none" style={styles.mapCanvasSurface}>
          <MapPin
            color={styles.meta.lightIconColor.color}
            size={styles.meta.iconMedium.width}
            strokeWidth={styles.meta.iconMedium.strokeWidth}
          />
        </View>
        {locations.map((location) => {
          const isActive = location.id === activeLocationId;
          const Icon = location.type === 'dealer' ? Store : Wrench;
          const pinIconColor = isActive
            ? styles.meta.pinActiveIconColor.color
            : styles.meta.darkIconColor.color;

          return (
            <Pressable
              accessibilityLabel={t('dealerNetwork.map.pinLabel', {
                city: t(location.cityKey),
                name: t(location.nameKey),
              })}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              key={location.id}
              onPress={() => onSelectLocation(location.id)}
              style={({ pressed }) => [
                styles.mapPin,
                {
                  left: `${location.mapPosition.xPercent}%`,
                  top: `${location.mapPosition.yPercent}%`,
                },
                isActive && styles.mapPinActive,
                pressed && styles.pressed,
              ]}
              testID={`dealer-network-pin-${location.id}`}
            >
              <Icon
                color={pinIconColor}
                size={styles.meta.iconSmall.width}
                strokeWidth={styles.meta.iconSmall.strokeWidth}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
