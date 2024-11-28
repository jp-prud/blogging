import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useGetPostDetails } from '@useCases';

import { Box, Button, Icon, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostDetailsScreen({
  route,
}: AppScreenProps<'PostDetailsScreen'>) {
  const { id } = route.params;

  const { post, isLoading } = useGetPostDetails(id);

  const { navigate } = useNavigation();

  function handlePressEditPoost() {
    navigate('EditPostScreen', { id });
  }

  return (
    <Screen
      isLoading={isLoading}
      canGoBack
      rightHeaderComponent={<Icon name="close" />}
      title={isLoading ? 'Carregando...' : post!.title}
      FooterComponent={
        <Button text="Editar post" onPress={handlePressEditPoost} />
      }>
      <Image
        style={{
          flex: 1,
          maxHeight: 320,
          borderRadius: 16,
        }}
        alt="Background Image"
        source={{ uri: post?.thumbnail }}
      />

      <Box mt="s24" g="s8">
        <Text preset="headingMedium">
          {post?.title} - @{post?.author}
        </Text>
        <Text color="subtext">{post?.content}</Text>
      </Box>
    </Screen>
  );
}
