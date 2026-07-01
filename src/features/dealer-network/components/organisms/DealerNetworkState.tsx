import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkStateProps = {
  bodyKey: string;
  styles: DealerNetworkStyles;
  titleKey: string;
};

export function DealerNetworkState({ bodyKey, styles, titleKey }: DealerNetworkStateProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.statePanel}>
      <Text style={styles.stateTitle}>{t(titleKey)}</Text>
      <Text style={styles.stateBody}>{t(bodyKey)}</Text>
    </View>
  );
}
