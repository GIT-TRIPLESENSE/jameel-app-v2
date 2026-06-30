import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { type AppTheme, useAppTheme } from '@/theme';

type NavigationPlaceholderScreenProps = {
  titleKey: string;
};

export function NavigationPlaceholderScreen({ titleKey }: NavigationPlaceholderScreenProps) {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>{t(titleKey)}</Text>
        <Text style={styles.body}>{t('navigation.placeholder.body')}</Text>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme: AppTheme) {
  return StyleSheet.create({
    safeArea: {
      flex: theme.layout.screenFlex,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: theme.layout.screenFlex,
      justifyContent: 'center',
      gap: theme.spacing.base,
      paddingHorizontal: theme.layout.mobilePageMargin,
      paddingBottom:
        theme.layout.bottomNavHeight +
        theme.layout.bottomNavBottomOffset +
        theme.layout.mobilePageMargin,
    },
    title: {
      color: theme.colors.text,
      fontFamily: theme.typography.fontFamilies.extraBold,
      fontSize: theme.typography.sizes.display,
      lineHeight: theme.typography.lineHeights.display,
    },
    body: {
      color: theme.colors.textMuted,
      fontFamily: theme.typography.fontFamilies.medium,
      fontSize: theme.typography.sizes.body,
      lineHeight: theme.typography.lineHeights.body,
    },
  });
}
