import { useTranslation } from 'react-i18next';
import { Image, Pressable, Text, View } from 'react-native';

import type { BrandEntry } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type BrandEntryCardProps = {
  entry: BrandEntry;
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function BrandEntryCard({ entry, onAction, styles }: BrandEntryCardProps) {
  const { t } = useTranslation();
  const accentStyle =
    entry.accentRole === 'zeekr' ? styles.zeekrAccentText : styles.geelyAccentText;

  return (
    <Pressable
      accessibilityHint={t('jameelHome.brands.routeHint')}
      accessibilityLabel={t(entry.ctaKey)}
      accessibilityRole="button"
      onPress={() => onAction(entry.action)}
      style={({ pressed }) => [styles.brandCard, pressed && styles.pressed]}
    >
      <View accessibilityLabel={t(entry.imageAltKey)} style={styles.brandCardMedia}>
        <View style={styles.brandCardSheen} />
        <View style={styles.brandCardContent}>
          <Image
            accessibilityLabel={t(entry.logoKey)}
            resizeMode="contain"
            source={entry.logoSource}
            style={styles.brandLogoImage}
          />
          <View style={styles.brandTitleGroup}>
            <Text numberOfLines={1} style={[styles.brandCardTitle, accentStyle]}>
              {t(entry.titleAccentKey)}
            </Text>
            <Text numberOfLines={1} style={styles.brandCardTitle}>
              {t(entry.titleRestKey)}
            </Text>
          </View>
        </View>
        <Image
          accessibilityIgnoresInvertColors
          accessibilityLabel={t(entry.imageAltKey)}
          resizeMode="contain"
          source={entry.vehicleSource}
          style={styles.brandVehicleImage}
        />
      </View>
    </Pressable>
  );
}
