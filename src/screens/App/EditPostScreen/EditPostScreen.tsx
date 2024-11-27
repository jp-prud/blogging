import { Screen, TouchableOpacityBox, Text } from "@components";
import { AppScreenProps } from "@routes";
import { useEditPost } from "@useCases";
import { EditPostDTO } from '../../../@types'
import { useForm } from "react-hook-form";

export function EditPostScreen({route}: AppScreenProps<'EditPostScreen'>) {
  const { id } = route.params

  const { execute } = useEditPost()

  const { handleSubmit } = useForm<EditPostDTO['data']>()

  const onSubmit = handleSubmit((data) => execute({id, data}))
  
  return (
    <Screen
      FooterComponent={
        <TouchableOpacityBox onPress={onSubmit}>
          <Text>Finalizar edição</Text>
        </TouchableOpacityBox>
      }        
    >
      <Text>Edição - {id}</Text>
    </Screen>
  );
}