import { PostService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { EditPostDTO, MutationKeys, QueryKeys } from '../../../@types';

export function useEditPost({ onSuccess }: { onSuccess: () => void }) {
  const { editPost } = PostService();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<void, unknown, EditPostDTO>({
    mutationKey: [MutationKeys.UPDATE_POST],
    mutationFn: (updatePostInput: EditPostDTO) => editPost(updatePostInput),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.LIST_POSTS, [QueryKeys.DETAILS_POST, { id }]],
      });

      onSuccess();
    },
  });

  return {
    execute: mutateAsync,
    isPending,
  };
}
