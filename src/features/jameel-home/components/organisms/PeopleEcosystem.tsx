import { ChevronRight } from 'lucide-react-native';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { PeopleRole } from '../../types';
import { PeopleRoleCard } from '../molecules/PeopleRoleCard';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type PeopleEcosystemProps = {
  onAction: ActionHandler;
  roles: PeopleRole[];
  styles: JameelHomeStyles;
};

export function PeopleEcosystem({ onAction, roles, styles }: PeopleEcosystemProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.peopleSection}>
      <View style={styles.peopleHeader}>
        <Text style={styles.peopleSectionTitle}>{t('jameelHome.people.title')}</Text>
        <Pressable
          accessibilityHint={t('jameelHome.prototypeActionHint')}
          accessibilityLabel={t('jameelHome.people.cta')}
          accessibilityRole="button"
          onPress={() => onAction('open-network')}
          style={({ pressed }) => [styles.peopleCta, pressed && styles.pressed]}
        >
          <Text numberOfLines={1} style={styles.peopleCtaText}>
            {t('jameelHome.people.cta')}
          </Text>
          <ChevronRight
            color={styles.meta.darkIconColor.color}
            size={styles.meta.iconSmall.width}
            strokeWidth={styles.meta.iconStroke.width}
          />
        </Pressable>
      </View>
      <View style={styles.peopleCarouselViewport}>
        <ScrollView
          contentContainerStyle={styles.peopleCarouselTrack}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {roles.map((role) => (
            <PeopleRoleCard key={role.id} role={role} styles={styles} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
