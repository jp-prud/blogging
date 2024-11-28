import { FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useListPosts } from '@useCases';

import {
  Box,
  Button,
  Screen,
  Text,
  TitleBar,
  TouchableOpacityBox,
} from '@components';
import { AppScreenProps } from '@routes';

import { PostProps } from '../../../@types';

export function HomeScreen({ }: AppScreenProps<'HomeScreen'>) {
  const { isLoading, posts } = useListPosts();

  const { navigate } = useNavigation();

  function renderPost({ item }: { item: PostProps }) {
    const { id, title, thumbnail, author, category, content } = item;

    return (
      <TouchableOpacityBox
        onPress={() => navigate('PostDetailsScreen', { id })}>
        <Box>
          <Box position="relative">
            <Image
              source={{ uri: thumbnail, height: 200 }}
              style={{ borderRadius: 8 }}
            />

            <Box position="absolute" top={8} right={8}>
              <Text>{category}</Text>
            </Box>
          </Box>

          <Text mt="s8">
            {title} - {author}
          </Text>
          <Text mt="s8">{content}</Text>
        </Box>
      </TouchableOpacityBox>
    );
  }

  function renderFooterComponent() {
    return (
      <Button
        text="Adicionar novo post"
        onPress={() => navigate('CreatePostScreen')}
      />
    );
  }

  function renderHeaderListComponent() {
    return <TitleBar title="Conheça todas as novidades!" mb="s32" />;
  }

  function renderSeparatorComponent() {
    return <Box height={24} />;
  }

  return (
    <Screen isLoading={isLoading} FooterComponent={renderFooterComponent()}>
      <FlatList
        keyExtractor={item => item.id}
        data={posts}
        renderItem={renderPost}
        ItemSeparatorComponent={renderSeparatorComponent}
        ListHeaderComponent={renderHeaderListComponent}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
