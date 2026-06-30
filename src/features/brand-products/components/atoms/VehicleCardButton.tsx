import { Pressable, Text } from 'react-native';

import type { BrandProductsStyles } from '../styles';

type VehicleCardButtonProps = {
  label: string;
  onPress?: () => void;
  styles: BrandProductsStyles;
  variant: 'primary' | 'secondary';
};

export function VehicleCardButton({ label, onPress, styles, variant }: VehicleCardButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.vehicleButton,
        styles.buttonVariants[variant],
        pressed && styles.pressed,
      ]}
    >
      <Text
        numberOfLines={1}
        style={[styles.vehicleButtonText, styles.buttonTextVariants[variant]]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
