import { PostService } from "@services";
import { useMutation } from "@tanstack/react-query";
import { EditPostDTO, MutationKeys } from "../../../@types";

export function useEditPost() {
  const { editPost } = PostService()

  const { mutateAsync, isPending } = useMutation<void, unknown, EditPostDTO>({
    mutationKey: [MutationKeys.UPDATE_POST],
    mutationFn: (updatePostInput: EditPostDTO) => editPost(updatePostInput),
  })

  return {
    execute: mutateAsync, isPending
  };
}
