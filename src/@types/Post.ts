export interface PostProps {
  id: string;
  thumbnail: string;
  title: string;
  content: string;
  author: string;
  category: string;
}

export type CreatePostProps = Omit<PostProps, 'id'>;

export type EditPostProps = Omit<PostProps, 'id' | 'author'>;

export type EditPostDTO = { id: string, data: EditPostProps }