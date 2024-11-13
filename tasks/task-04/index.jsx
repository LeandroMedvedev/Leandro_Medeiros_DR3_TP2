import { FlatList, StyleSheet, View } from 'react-native';

import { DATA } from '../../constants';
import Item from './components/Item';
import { colors } from '../../styles/globalStyles';

export default function Task04() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={DATA}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
    backgroundColor: colors.ebony,
  },
  list: {
    gap: 15,
  },
});
