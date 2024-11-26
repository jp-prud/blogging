import { useQuery } from "@tanstack/react-query"
import { PostService } from "../../../services/PostService"
import { QueryKeys } from '../../../@types'

export function useListPosts() {
  const { listPosts } = PostService()

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.LIST_POSTS],
    queryFn: listPosts
  })

  return {
    posts: data,
    isLoading,
    isError
  }
}
