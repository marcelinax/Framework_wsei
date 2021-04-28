import { combineReducers } from "redux";
import photosReducer from "./photosStore";
import postsReducer from "./postsStore";
import userReducer from "./userStore";
import usersReducer from "./secondaryUserStore";

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  users: usersReducer,
  photos: photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
