import { Post } from "../types/Post";

const initState: Post[] = [];

type GET_POSTS = "GET_POSTS";
type PostStoreActions = GET_POSTS;

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};

const postsReducer = (
  state: Post[] = initState,
  action: {
    type: PostStoreActions;
    payload: Post[];
  }
): Post[] => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
