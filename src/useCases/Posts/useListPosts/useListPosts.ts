import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '../../../@types';
import { PostService } from '../../../services/PostService';

export function useListPosts() {
  const { listPosts } = PostService();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.LIST_POSTS],
    queryFn: listPosts,
    refetchOnMount: true,
  });

  return {
    posts: data,
    isLoading,
    isError,
  };
}
