import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { PrototypeButton } from '../atoms/PrototypeButton';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type ClosingDecisionProps = {
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function ClosingDecision({ onAction, styles }: ClosingDecisionProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.closing}>
      <Text style={styles.closingTitle}>{t('jameelHome.closing.title')}</Text>
      <Text style={styles.closingBody}>{t('jameelHome.closing.body')}</Text>
      <View style={styles.closingActions}>
        <PrototypeButton
          label={t('jameelHome.closing.geelyCta')}
          onPress={() => onAction('discover-geely')}
          styles={styles}
          variant="dark"
        />
        <PrototypeButton
          label={t('jameelHome.closing.zeekrCta')}
          onPress={() => onAction('discover-zeekr')}
          styles={styles}
          variant="outlineOnLight"
        />
        <PrototypeButton
          label={t('jameelHome.closing.quizCta')}
          onPress={() => onAction('start-quiz')}
          styles={styles}
          variant="outlineOnLight"
        />
      </View>
    </View>
  );
}
