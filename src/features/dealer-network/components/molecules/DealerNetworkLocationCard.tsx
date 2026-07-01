import { ChevronRight, Store, Wrench } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { DealerNetworkLocationDto } from '@/services';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkLocationCardProps = {
  isSelected: boolean;
  location: DealerNetworkLocationDto;
  onSelectLocation: (locationId: string) => void;
  styles: DealerNetworkStyles;
};

export function DealerNetworkLocationCard({
  isSelected,
  location,
  onSelectLocation,
  styles,
}: DealerNetworkLocationCardProps) {
  const { t } = useTranslation();
  const Icon = location.type === 'dealer' ? Store : Wrench;
  const name = t(location.nameKey);
  const city = t(location.cityKey);

  return (
    <Pressable
      accessibilityLabel={t('dealerNetwork.locationCard.accessibilityLabel', {
        city,
        name,
      })}
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected }}
      onPress={() => onSelectLocation(location.id)}
      style={({ pressed }) => [
        styles.locationCard,
        isSelected && styles.locationCardSelected,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.locationIconWrap}>
        <Icon
          color={styles.meta.accentColor.color}
          size={styles.meta.iconMedium.width}
          strokeWidth={styles.meta.iconMedium.strokeWidth}
        />
      </View>
      <View style={styles.locationCardBody}>
        <Text numberOfLines={1} style={styles.locationType}>
          {t(`dealerNetwork.types.${location.type}`)}
        </Text>
        <Text numberOfLines={1} style={styles.locationName}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.locationMeta}>
          {t('dealerNetwork.distanceLabel', {
            city,
            distance: location.distanceKm.toFixed(1),
          })}
        </Text>
      </View>
      <ChevronRight
        color={styles.meta.lightIconColor.color}
        size={styles.meta.iconSmall.width}
        strokeWidth={styles.meta.iconSmall.strokeWidth}
      />
    </Pressable>
  );
}
