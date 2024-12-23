import { FlatList, StyleSheet, View } from 'react-native';

import { PostCard } from '../../components';
import { POSTS } from '../../../../constants';
import { colors } from '../../../../styles/globalStyles';

export default function PostListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => navigation.navigate('PostDetails', { post: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ebony,
  },
  list: {
    gap: 15,
  },
});
