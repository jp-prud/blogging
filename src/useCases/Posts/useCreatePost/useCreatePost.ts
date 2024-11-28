import { PostService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CreatePostProps, MutationKeys, QueryKeys } from '../../../@types';

export function useCreatePost({ onSuccess }: { onSuccess: () => void }) {
  const { createPost } = PostService();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<
    void,
    unknown,
    CreatePostProps
  >({
    mutationKey: [MutationKeys.CREATE_POST],
    mutationFn: post => createPost(post),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QueryKeys.LIST_POSTS],
      });

      onSuccess();
    },
  });

  return {
    execute: mutateAsync,
    isPending,
  };
}
