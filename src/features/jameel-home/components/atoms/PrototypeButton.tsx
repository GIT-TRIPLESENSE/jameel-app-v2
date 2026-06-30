import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';

import type { JameelHomeStyles } from '../styles';
import type { ButtonVariant } from '../types';

type PrototypeButtonProps = {
  label: string;
  onPress: () => void;
  styles: JameelHomeStyles;
  variant: ButtonVariant;
};

export function PrototypeButton({ label, onPress, styles, variant }: PrototypeButtonProps) {
  const { t } = useTranslation();
  const variantStyle = styles.buttonVariants[variant];
  const textStyle = styles.buttonTextVariants[variant];

  return (
    <Pressable
      accessibilityHint={t('jameelHome.prototypeActionHint')}
      accessibilityLabel={label}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, variantStyle, pressed && styles.pressed]}
    >
      <Text numberOfLines={1} style={[styles.buttonText, textStyle]}>
        {label}
      </Text>
    </Pressable>
  );
}
