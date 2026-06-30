import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { BrandProductsStyles } from '../styles';

type BrandProductsHeroProps = {
  headlineBrandKey: string;
  headlineRestKey: string;
  styles: BrandProductsStyles;
};

export function BrandProductsHero({
  headlineBrandKey,
  headlineRestKey,
  styles,
}: BrandProductsHeroProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.hero}>
      <View style={styles.headline}>
        <Text numberOfLines={1} style={[styles.headlineLine, styles.headlineAccent]}>
          {t(headlineBrandKey)}
        </Text>
        <Text numberOfLines={1} style={styles.headlineLine}>
          {t(headlineRestKey)}
        </Text>
      </View>
      <Text numberOfLines={1} style={styles.sectionTitle}>
        {t('brandProducts.modelsTitle')}
      </Text>
    </View>
  );
}
