import { ChevronRight } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Pressable, Text, View, type ImageStyle } from 'react-native';

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
      <ImageBackground
        accessibilityLabel={t(entry.imageAltKey)}
        imageStyle={styles.brandCardImage as ImageStyle}
        resizeMode="cover"
        source={{ uri: entry.imageUri }}
        style={styles.brandCardMedia}
      >
        <View style={styles.brandCardOverlay} />
        <View style={styles.brandCardContent}>
          <Text numberOfLines={1} style={styles.brandLogoText}>
            {t(entry.logoKey)}
          </Text>
          <View style={styles.brandTitleGroup}>
            <Text numberOfLines={1} style={[styles.brandCardTitle, accentStyle]}>
              {t(entry.titleAccentKey)}
            </Text>
            <Text numberOfLines={1} style={styles.brandCardTitle}>
              {t(entry.titleRestKey)}
            </Text>
          </View>
          <View style={styles.brandCardCta}>
            <Text numberOfLines={1} style={styles.brandCardCtaText}>
              {t(entry.ctaKey)}
            </Text>
            <ChevronRight
              color={styles.meta.darkIconColor.color}
              size={styles.meta.iconSmall.width}
            />
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
