import { Comment } from "../types/Comment";

const initState: Comment[] = [];

type GET_COMMENTS = "GET_COMMENTS";
type CommentStoreActions = GET_COMMENTS;

export const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  return {
    type: "GET_COMMENTS",
    payload: comments,
  };
};

const commentsReducer = (
  state: Comment[] = initState,
  action: {
    type: CommentStoreActions;
    payload: Comment[];
  }
): Comment[] => {
  switch (action.type) {
    case "GET_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};

export default commentsReducer;
