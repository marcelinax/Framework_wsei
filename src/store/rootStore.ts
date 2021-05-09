import { combineReducers } from "redux";
import commentsReducer from "./commentsStore";
import companiesReducer from "./companyStore";
import loggedUserReducer from "./loggedUserStore";
import photosReducer from "./photosStore";
import postsReducer from "./postsStore";
import usersReducer from "./usersStore";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  loggedUser: loggedUserReducer,
  photos: photosReducer,
  comments: commentsReducer,
  companies: companiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
