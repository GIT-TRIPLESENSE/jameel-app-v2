import { ChevronRight } from 'lucide-react-native';
import { ImageBackground, Pressable, Text, View, type ImageStyle } from 'react-native';
import { useTranslation } from 'react-i18next';

import { jameelMembershipBackgroundImage } from '../../data';
import type { MembershipSignal } from '../../types';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type MembershipContinuityProps = {
  onAction: ActionHandler;
  signals: MembershipSignal[];
  styles: JameelHomeStyles;
};

export function MembershipContinuity({ onAction, signals, styles }: MembershipContinuityProps) {
  const { t } = useTranslation();

  return (
    <ImageBackground
      accessibilityLabel={t('jameelHome.membership.imageAlt')}
      imageStyle={styles.membershipImage as ImageStyle}
      resizeMode="cover"
      source={jameelMembershipBackgroundImage}
      style={styles.membershipPanel}
    >
      <View style={styles.membershipScrim} />
      <View style={styles.membershipContent}>
        <View style={styles.membershipHeading}>
          <View style={styles.membershipSignals}>
            {signals.map((signal) => (
              <View key={signal.id} style={styles.membershipSignal}>
                <Text numberOfLines={1} style={styles.membershipSignalText}>
                  {t(signal.titleKey)}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.membershipTitle}>{t('jameelHome.membership.title')}</Text>
        </View>
        <Text style={styles.membershipBody}>{t('jameelHome.membership.body')}</Text>
        <Pressable
          accessibilityHint={t('jameelHome.prototypeActionHint')}
          accessibilityLabel={t('jameelHome.membership.cta')}
          accessibilityRole="button"
          onPress={() => onAction('open-membership')}
          style={({ pressed }) => [styles.membershipCta, pressed && styles.pressed]}
        >
          <Text numberOfLines={1} style={styles.membershipCtaText}>
            {t('jameelHome.membership.cta')}
          </Text>
          <ChevronRight
            color={styles.meta.lightIconColor.color}
            size={styles.meta.iconMedium.width}
            strokeWidth={styles.meta.iconStroke.width}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
}
