import { useCreatePost } from '@useCases';
import { useForm } from 'react-hook-form';

import { Box, Button, FormTextInput, Screen } from '@components';
import { AppScreenProps } from '@routes';
import { useNavigation } from '@react-navigation/native';

export function CreatePostScreen({ }: AppScreenProps<'CreatePostScreen'>) {
  const { navigate } = useNavigation()

  const { execute, isPending } = useCreatePost({
    onSuccess: () => navigate('HomeScreen'),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: '',
      thumbnail: 'teste',
      category: '',
      author: '',
    },
  });

  const onPressCreatePost = handleSubmit(data => execute(data));

  return (
    <Screen
      canGoBack
      title="Criação de Post"
      FooterComponent={
        <Button text="Criar" loading={isPending} onPress={onPressCreatePost} />
      }
      scrollable>
      <Box gap="s16">
        <FormTextInput
          control={control}
          label="Título"
          name="title"
          description="Insira o título para o post."
        />

        <FormTextInput control={control} label="Conteúdo" name="content" />
        <FormTextInput control={control} label="Autor" name="author" />
        <FormTextInput control={control} label="Categoria" name="category" />
      </Box>
    </Screen>
  );
}
