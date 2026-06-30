import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { JameelHomeStyles } from '../styles';

type SectionProps = {
  children: ReactNode;
  styles: JameelHomeStyles;
  titleKey: string;
};

export function Section({ children, styles, titleKey }: SectionProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t(titleKey)}</Text>
      {children}
    </View>
  );
}
