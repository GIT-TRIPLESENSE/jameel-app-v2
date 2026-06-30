import { Heart } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Pressable, Text, View, type ImageStyle } from 'react-native';

import type { VehicleDto } from '@/services';

import { VehicleCardButton } from '../atoms/VehicleCardButton';
import { VehicleCardScrim } from '../atoms/VehicleCardScrim';
import { VehicleMetricGlass } from '../atoms/VehicleMetricGlass';
import { VehicleMetricItem } from '../atoms/VehicleMetricItem';
import type { BrandProductsStyles } from '../styles';

type VehicleCardProps = {
  styles: BrandProductsStyles;
  vehicle: VehicleDto;
};

export function VehicleCard({ styles, vehicle }: VehicleCardProps) {
  const { t } = useTranslation();

  return (
    <ImageBackground
      accessibilityLabel={t(vehicle.imageAltKey)}
      imageStyle={styles.vehicleImage as ImageStyle}
      resizeMode="cover"
      source={{ uri: vehicle.imageUri }}
      style={styles.vehicleCard}
    >
      <VehicleCardScrim styles={styles} />
      <Pressable
        accessibilityLabel={t('brandProducts.vehicleCard.favoriteLabel')}
        accessibilityRole="button"
        style={({ pressed }) => [styles.favoriteButton, pressed && styles.pressed]}
      >
        <Heart
          color={styles.meta.lightIconColor.color}
          size={styles.meta.iconMedium.width}
          strokeWidth={styles.meta.iconMedium.strokeWidth}
        />
      </Pressable>
      <View style={styles.vehicleContent}>
        <View style={styles.vehicleTitleRow}>
          <View style={styles.vehicleTitleGroup}>
            <Text numberOfLines={1} style={styles.vehicleTitle}>
              {t(vehicle.title.prefixKey)}
            </Text>
            <Text numberOfLines={1} style={[styles.vehicleTitle, styles.vehicleTitleAccent]}>
              {t(vehicle.title.accentKey)}
            </Text>
            {vehicle.title.suffixKey ? (
              <Text numberOfLines={1} style={styles.vehicleTitle}>
                {t(vehicle.title.suffixKey)}
              </Text>
            ) : null}
          </View>
          <View style={styles.priceGroup}>
            <Text numberOfLines={1} style={styles.pricePrefix}>
              {t(vehicle.price.prefixKey)}
            </Text>
            <Text numberOfLines={1} style={styles.priceValue}>
              {vehicle.price.value} {vehicle.price.currency}
            </Text>
          </View>
        </View>

        <View style={styles.metricTray}>
          <VehicleMetricGlass styles={styles} />
          {vehicle.metrics.map((metric, index) => (
            <VehicleMetricItem
              isDivided={index > 0}
              key={metric.id}
              label={t(metric.labelKey)}
              metric={metric}
              styles={styles}
            />
          ))}
        </View>

        <View style={styles.vehicleActions}>
          <VehicleCardButton
            label={t('brandProducts.vehicleCard.discoverCta')}
            styles={styles}
            variant="secondary"
          />
          <VehicleCardButton
            label={t('brandProducts.vehicleCard.testDriveCta')}
            styles={styles}
            variant="primary"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
