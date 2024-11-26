import { PostService } from "@services"
import { useQuery } from "@tanstack/react-query"
import { QueryKeys } from "../../../@types"

export function useGetPostDetails(id: string) {
  const { getPostById } = PostService()

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.DETAILS_POST, { id }],
    queryFn: () => getPostById(id)
  })

  return {
    post: data,
    isLoading,
    isError
  }
}
