import { ShieldCheck } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { PrototypeButton } from '../atoms/PrototypeButton';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type MembershipPreviewProps = {
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function MembershipPreview({ onAction, styles }: MembershipPreviewProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.membership}>
      <View style={styles.membershipIcon}>
        <ShieldCheck
          color={styles.meta.jameelAccentColor.color}
          size={styles.meta.iconLarge.width}
        />
      </View>
      <View style={styles.membershipCopy}>
        <Text style={styles.membershipTitle}>{t('jameelHome.membership.title')}</Text>
        <Text style={styles.membershipBody}>{t('jameelHome.membership.body')}</Text>
      </View>
      <PrototypeButton
        label={t('jameelHome.membership.cta')}
        onPress={() => onAction('secondary')}
        styles={styles}
        variant="outlineOnDark"
      />
    </View>
  );
}
