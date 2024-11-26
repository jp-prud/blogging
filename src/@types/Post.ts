export interface PostProps {
  id: string
  thumbnail: string
  title: string
  content: string
  author: string
  category: string
}

export type CreatePostProps = Omit<PostProps, 'id'>
