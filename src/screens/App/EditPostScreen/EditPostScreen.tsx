import { useNavigation } from '@react-navigation/native';
import { useEditPost, useGetPostDetails } from '@useCases';
import { useForm } from 'react-hook-form';

import { Box, Button, FormTextInput, Screen } from '@components';
import { AppScreenProps } from '@routes';

import { EditPostDTO } from '../../../@types';

export function EditPostScreen({ route }: AppScreenProps<'EditPostScreen'>) {
  const { id } = route.params;

  const { navigate } = useNavigation();

  const { post } = useGetPostDetails(id);

  const { execute } = useEditPost({
    onSuccess: () => navigate('HomeScreen'),
  });

  const { control, handleSubmit } = useForm<EditPostDTO['data']>({
    defaultValues: post,
  });

  const onSubmit = handleSubmit(data => execute({ id, data }));

  return (
    <Screen
      FooterComponent={<Button text="Finalizar edição" onPress={onSubmit} />}
      canGoBack
      title={`Edição - ${post?.title}`}>
      <Box gap="s16">
        <FormTextInput
          control={control}
          label="Thumbnail"
          name="thumbnail"
          description="Insira a thumbnail para o post."
        />

        <FormTextInput
          control={control}
          label="Título"
          name="title"
          description="Insira o título para o post."
        />

        <FormTextInput control={control} label="Conteúdo" name="content" />
        <FormTextInput control={control} label="Categoria" name="category" />
      </Box>
    </Screen>
  );
}
