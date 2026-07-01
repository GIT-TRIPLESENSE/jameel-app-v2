import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import type { JameelHomeStyles } from '../styles';

type SectionHeaderProps = {
  align?: 'left' | 'right';
  eyebrowKey?: string;
  styles: JameelHomeStyles;
  titleKey: string;
};

export function SectionHeader({
  align = 'left',
  eyebrowKey,
  styles,
  titleKey,
}: SectionHeaderProps) {
  const { t } = useTranslation();
  const isRightAligned = align === 'right';

  return (
    <View style={[styles.sectionHeader, isRightAligned && styles.sectionHeaderRight]}>
      {eyebrowKey ? (
        <Text style={[styles.sectionEyebrow, isRightAligned && styles.textRight]}>
          {t(eyebrowKey)}
        </Text>
      ) : null}
      <Text style={[styles.sectionTitle, isRightAligned && styles.textRight]}>{t(titleKey)}</Text>
    </View>
  );
}
