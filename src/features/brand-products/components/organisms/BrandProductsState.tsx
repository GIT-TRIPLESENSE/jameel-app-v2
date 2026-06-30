import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { BrandProductsStyles } from '../styles';

type BrandProductsStateProps = {
  bodyKey: string;
  styles: BrandProductsStyles;
  titleKey: string;
};

export function BrandProductsState({ bodyKey, styles, titleKey }: BrandProductsStateProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.statePanel}>
      <Text style={styles.stateTitle}>{t(titleKey)}</Text>
      <Text style={styles.stateBody}>{t(bodyKey)}</Text>
    </View>
  );
}
