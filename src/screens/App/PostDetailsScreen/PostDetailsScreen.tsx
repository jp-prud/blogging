import { Screen, Text, TouchableOpacityBox } from "@components";
import { useNavigation } from "@react-navigation/native";
import { AppScreenProps } from "@routes";
import { useGetPostDetails } from "@useCases";

export function PostDetailsScreen({ route }: AppScreenProps<'PostDetailsScreen'>) {
  const { id } = route.params

  const { post, isLoading } = useGetPostDetails(id)

  const { navigate } = useNavigation()
  
  function handlePressEditPoost() {
    navigate('EditPostScreen', { id })
  }
  
  return (
    <Screen 
      isLoading={isLoading} 
      canGoBack 
      title={isLoading ? 'Carregando...' : post!.title}
      FooterComponent={
        <TouchableOpacityBox onPress={handlePressEditPoost}>
          <Text>Editar conteúdo</Text>
        </TouchableOpacityBox>
      }  
    >
      <Text>{post?.title}</Text>
      <Text>{post?.content}</Text>
    </Screen>
  );
}
