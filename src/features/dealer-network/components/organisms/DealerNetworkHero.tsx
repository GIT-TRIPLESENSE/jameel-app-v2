import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkHeroProps = {
  headlineBrandKey: string;
  headlineRestKey: string;
  styles: DealerNetworkStyles;
};

export function DealerNetworkHero({
  headlineBrandKey,
  headlineRestKey,
  styles,
}: DealerNetworkHeroProps) {
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
      <Text style={styles.heroBody}>{t('dealerNetwork.hero.body')}</Text>
      <Text numberOfLines={1} style={styles.sectionTitle}>
        {t('dealerNetwork.searchTitle')}
      </Text>
    </View>
  );
}
