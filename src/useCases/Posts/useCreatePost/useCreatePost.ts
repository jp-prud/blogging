import { PostService } from '@services';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePostProps, MutationKeys, QueryKeys } from '../../../@types';

export function useCreatePost() {
  const { createPost } = PostService()

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation<void, unknown, CreatePostProps>({
    mutationKey: [MutationKeys.CREATE_POST],
    mutationFn: (post) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.LIST_POSTS]
      })
    }
  })

  return {
    execute: mutateAsync,
    isPending
  }
}
