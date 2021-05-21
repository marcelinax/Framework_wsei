import { User } from "../types/User";
import { emptyUser } from "../defaults/emptyUser";

const initState: User = emptyUser;

type GET_LOGGED_USER = "GET_LOGGED_USER";
type SET_LOGGED_USER = "SET_LOGGED_USER";
type LoggedUserStoreActions = GET_LOGGED_USER | SET_LOGGED_USER;

export const getLoggedUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    type: "GET_LOGGED_USER",
    payload: users[Math.floor(Math.random() * users.length)],
  };
};

export const setLoggedUser = (user: User) => {
  return {
    type: "SET_LOGGED_USER",
    payload: user,
  };
};

const loggedUserReducer = (
  state: User = initState,
  action: {
    type: LoggedUserStoreActions;
    payload: User;
  }
): User => {
  switch (action.type) {
    case "GET_LOGGED_USER":
      return action.payload;
    case "SET_LOGGED_USER":
      return action.payload;
    default:
      return state;
  }
};

export default loggedUserReducer;
