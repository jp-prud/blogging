import { CreatePostProps, PostProps } from "../@types"

const POST_MOCK_LIST: Array<PostProps> = [
  {
    id: "1",
    thumbnail: "https://via.placeholder.com/150",
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet",
    author: "John Doe",
    category: "Technology"
  },
  {
    id: "2",
    thumbnail: "https://via.placeholder.com/150",
    title: "Post 2",
    content: "Consectetur adipiscing elit",
    author: "Jane Smith",
    category: "Science"
  },
  {
    id: "3",
    thumbnail: "https://via.placeholder.com/150",
    title: "Post 3",
    content: "Sed do eiusmod tempor incididunt",
    author: "David Johnson",
    category: "Art"
  },
  {
    id: "4",
    thumbnail: "https://via.placeholder.com/150",
    title: "Post 4",
    content: "Ut labore et dolore magna aliqua",
    author: "Emily Brown",
    category: "Fashion"
  },
  {
    id: "5",
    thumbnail: "https://via.placeholder.com/150",
    title: "Post 5",
    content: "Excepteur sint occaecat cupidatat non proident",
    author: "Michael Wilson",
    category: "Sports"
  }
]

export function PostService() {
  async function listPosts(): Promise<Array<PostProps>> {
    return Promise.resolve(POST_MOCK_LIST)
  }

  async function getPostById(id: string): Promise<PostProps | undefined> {
    return Promise.resolve(POST_MOCK_LIST.find(post => post.id === id))
  }

  async function createPost(post: CreatePostProps): Promise<void> {
    const newPost = {
      ...post,
      id: String(POST_MOCK_LIST.length + 1)
    }

    POST_MOCK_LIST.push(newPost)
  }

  return {
    listPosts,
    getPostById,
    createPost
  }
}
