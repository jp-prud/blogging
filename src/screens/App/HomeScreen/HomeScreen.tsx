import { FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useListPosts } from '@useCases';

import {
  Box,
  Button,
  Icon,
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

  const MOST_VISUALIZED_POST: PostProps | undefined = !isLoading
    ? posts![0]
    : undefined;

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

            <Box
              position="absolute"
              top={8}
              right={8}
              backgroundColor="green"
              px="s8"
              py="s2"
              borderRadius="s4">
              <Text preset="paragraphCaption" fontWeight="700">
                {category}
              </Text>
            </Box>
          </Box>

          <Text mt="s8" fontWeight="700">
            {title} - @{author}
          </Text>
          <Text mt="s4" color="subtext" preset="paragraphSmall">
            {content}
          </Text>
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
    return (
      <>
        <Box
          mb="s32"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box>
            <Box flexDirection="row" gap="s8" alignItems="center">
              <Box
                width={48}
                height={48}
                backgroundColor="subtext"
                borderRadius="s32"
              />

              <Box>
                <Text preset="headingSmall" style={{ fontSize: 16 }}>
                  Olá, João Pedro!
                </Text>
                <Text preset="paragraphSmall" color="subtext">
                  3 artigos publicados
                </Text>
              </Box>
            </Box>
          </Box>

          <Icon name="close" />
        </Box>

        <Box gap="s16" mb="s16">
          <TitleBar title="Post mais acessado hoje!" />

          <TouchableOpacityBox
            onPress={() =>
              navigate('PostDetailsScreen', { id: MOST_VISUALIZED_POST!.id })
            }
            flex={1}
            gap="s8">
            <Image
              source={{ uri: MOST_VISUALIZED_POST?.thumbnail }}
              style={{
                flex: 1,
                height: 260,
                borderRadius: 8,
              }}
            />
            <Text fontWeight="700">
              {MOST_VISUALIZED_POST?.title} - @{MOST_VISUALIZED_POST?.author}
            </Text>

            <Text color="subtext">{MOST_VISUALIZED_POST?.content}</Text>
          </TouchableOpacityBox>

          <TitleBar mt="s16" title="Todas as publicações" />
        </Box>
      </>
    );
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
