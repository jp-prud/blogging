import { Screen, Text } from "@components";
import { AppScreenProps } from "@routes";
import { useGetPostDetails } from "@useCases";

export function PostDetailsScreen({ route }: AppScreenProps<'PostDetailsScreen'>) {
  const { id } = route.params

  const { post, isLoading} = useGetPostDetails(id)

  return (
    <Screen isLoading={isLoading} canGoBack title={isLoading ? 'Carregando...' : post!.title}>
      <Text>{post?.title}</Text>
      <Text>{post?.content}</Text>
    </Screen>
  );
}
