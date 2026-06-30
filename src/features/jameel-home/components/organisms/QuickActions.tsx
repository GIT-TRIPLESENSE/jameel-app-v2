import { View } from 'react-native';

import type { QuickAction } from '../../types';
import { QuickActionItem } from '../molecules/QuickActionItem';
import type { JameelHomeStyles } from '../styles';
import type { ActionHandler } from '../types';

type QuickActionsProps = {
  actions: QuickAction[];
  onAction: ActionHandler;
  styles: JameelHomeStyles;
};

export function QuickActions({ actions, onAction, styles }: QuickActionsProps) {
  return (
    <View style={styles.quickActions}>
      {actions.map((action, index) => (
        <QuickActionItem
          action={action}
          index={index}
          key={action.id}
          onAction={onAction}
          showDivider={index < actions.length - 1}
          styles={styles}
        />
      ))}
    </View>
  );
}
