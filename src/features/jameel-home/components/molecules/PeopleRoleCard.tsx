import { useTranslation } from 'react-i18next';
import { ImageBackground, Text, View, type ImageStyle } from 'react-native';

import type { PeopleRole } from '../../types';
import type { JameelHomeStyles } from '../styles';

type PeopleRoleCardProps = {
  role: PeopleRole;
  styles: JameelHomeStyles;
};

export function PeopleRoleCard({ role, styles }: PeopleRoleCardProps) {
  const { t } = useTranslation();

  return (
    <ImageBackground
      accessibilityLabel={t(role.imageAltKey)}
      imageStyle={styles.peopleImage as ImageStyle}
      resizeMode="cover"
      source={{ uri: role.imageUri }}
      style={styles.peopleCard}
    >
      <View style={styles.peopleScrim} />
      <View style={styles.peopleCopy}>
        <Text numberOfLines={1} style={styles.peopleTitle}>
          {t(role.titleKey)}
        </Text>
        <Text numberOfLines={2} style={styles.peopleBody}>
          {t(role.bodyKey)}
        </Text>
      </View>
    </ImageBackground>
  );
}
