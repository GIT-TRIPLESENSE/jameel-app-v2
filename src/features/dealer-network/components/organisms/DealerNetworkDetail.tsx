import { Clock, MapPin, Phone, Store, Wrench } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';

import type { DealerNetworkCtaId, DealerNetworkLocationDto } from '@/services';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkDetailProps = {
  location: DealerNetworkLocationDto;
  styles: DealerNetworkStyles;
};

function getCtaVariant(index: number) {
  return index === 0 ? 'primary' : 'secondary';
}

function getCtaLabelKey(ctaId: DealerNetworkCtaId) {
  return `dealerNetwork.ctas.${ctaId}` as const;
}

export function DealerNetworkDetail({ location, styles }: DealerNetworkDetailProps) {
  const { t } = useTranslation();
  const Icon = location.type === 'dealer' ? Store : Wrench;
  const city = t(location.cityKey);

  return (
    <View style={styles.detailPanel}>
      <View style={styles.detailHeader}>
        <View style={styles.locationIconWrap}>
          <Icon
            color={styles.meta.accentColor.color}
            size={styles.meta.iconMedium.width}
            strokeWidth={styles.meta.iconMedium.strokeWidth}
          />
        </View>
        <View style={styles.detailBody}>
          <Text numberOfLines={1} style={styles.locationType}>
            {t(location.certificationKey)}
          </Text>
          <Text style={styles.detailTitle}>{t(location.nameKey)}</Text>
          <Text style={styles.detailMutedText}>
            {t('dealerNetwork.distanceLabel', {
              city,
              distance: location.distanceKm.toFixed(1),
            })}
          </Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <MapPin
          color={styles.meta.accentColor.color}
          size={styles.meta.iconSmall.width}
          strokeWidth={styles.meta.iconSmall.strokeWidth}
        />
        <Text style={styles.detailText}>{t(location.addressKey)}</Text>
      </View>
      <View style={styles.detailRow}>
        <Clock
          color={styles.meta.accentColor.color}
          size={styles.meta.iconSmall.width}
          strokeWidth={styles.meta.iconSmall.strokeWidth}
        />
        <Text style={styles.detailMutedText}>{t(location.openingHoursKey)}</Text>
      </View>
      <View style={styles.detailRow}>
        <Phone
          color={styles.meta.accentColor.color}
          size={styles.meta.iconSmall.width}
          strokeWidth={styles.meta.iconSmall.strokeWidth}
        />
        <Text style={styles.detailMutedText}>{location.phone}</Text>
      </View>

      <View style={styles.capabilityWrap}>
        {location.capabilityKeys.map((capabilityKey) => (
          <View key={capabilityKey} style={styles.capabilityPill}>
            <Text numberOfLines={1} style={styles.capabilityText}>
              {t(capabilityKey)}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.detailActions}>
        {location.ctaIds.slice(0, 2).map((ctaId, index) => {
          const variant = getCtaVariant(index);

          return (
            <Pressable
              accessibilityLabel={t(getCtaLabelKey(ctaId))}
              accessibilityRole="button"
              key={ctaId}
              style={({ pressed }) => [
                styles.detailButton,
                styles.detailButtonVariants[variant],
                pressed && styles.pressed,
              ]}
            >
              <Text
                numberOfLines={1}
                style={[styles.detailButtonText, styles.detailButtonTextVariants[variant]]}
              >
                {t(getCtaLabelKey(ctaId))}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
