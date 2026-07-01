import { Search } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { TextInput, View } from 'react-native';

import type { DealerNetworkStyles } from '../styles';

type DealerNetworkSearchBarProps = {
  onSearchTermChange: (value: string) => void;
  searchTerm: string;
  styles: DealerNetworkStyles;
};

export function DealerNetworkSearchBar({
  onSearchTermChange,
  searchTerm,
  styles,
}: DealerNetworkSearchBarProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.searchPanel}>
      <View style={styles.searchInputWrap}>
        <Search
          color={styles.meta.darkIconColor.color}
          size={styles.meta.iconSmall.width}
          strokeWidth={styles.meta.iconSmall.strokeWidth}
        />
        <TextInput
          accessibilityLabel={t('dealerNetwork.search.accessibilityLabel')}
          autoCapitalize="words"
          onChangeText={onSearchTermChange}
          placeholder={t('dealerNetwork.search.placeholder')}
          placeholderTextColor={styles.meta.inputPlaceholderColor.color}
          returnKeyType="search"
          style={styles.searchInput}
          value={searchTerm}
        />
      </View>
    </View>
  );
}
