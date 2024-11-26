import { ActivityIndicator, Box, FormTextInput, Screen, Text, TouchableOpacityBox } from "@components";
import { AppScreenProps } from "@routes";
import { useCreatePost } from "@useCases";
import { useForm } from "react-hook-form";

export function CreatePostScreen({ }: AppScreenProps<'CreatePostScreen'>) {
  const { execute, isPending} = useCreatePost()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: '',
      thumbnail: '',
      category: '',
      author: ''
    }
  })

  const onPressCreatePost = handleSubmit((data) => execute(data));

  return (
    <Screen
      canGoBack
      title="Criação de Post"
      FooterComponent={
        <TouchableOpacityBox onPress={onPressCreatePost}>
          {isPending ? <ActivityIndicator /> : <Text>Criar</Text>}
        </TouchableOpacityBox>
      }
      scrollable
    >
      <Box gap="s16">
        <FormTextInput control={control} label="Título" name="title" description="Insira o título para o post." />

        <FormTextInput control={control} label="Conteúdo" name="content" />
      </Box>
    </Screen>
  );
}
