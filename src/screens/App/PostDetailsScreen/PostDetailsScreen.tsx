import { useNavigation } from '@react-navigation/native';
import { useGetPostDetails } from '@useCases';

import { Button, Screen, Text } from '@components';
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
      title={isLoading ? 'Carregando...' : post!.title}
      FooterComponent={
        <Button text="Editar post" onPress={handlePressEditPoost} />
      }>
      <Text>{post?.title}</Text>
      <Text>{post?.content}</Text>
    </Screen>
  );
}
