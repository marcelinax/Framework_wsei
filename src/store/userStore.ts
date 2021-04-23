import { User } from "../types/User";

const initState: User = {
  name: {
    first: "",
    last: "",
  },
  picture: {
    large: "",
  },
};

// actions

type GET_NEW_USER = "GET_NEW_USER";
type SET_NEW_USER = "SET_NEW_USER";
type UserStoreActions = GET_NEW_USER | SET_NEW_USER;

export const getNewUser = async () => {
  const response = await fetch("https://randomuser.me/api");
  const responeObj = await response.json();
  const newUser = responeObj.results[0];
  return {
    type: "GET_NEW_USER",
    payload: newUser,
  };
};

export const setNewUser = (user: User) => {
  return {
    type: "SET_NEW_USER",
    payload: user,
  };
};

// reducer

const userReducer = (
  state: User = initState,
  action: {
    type: UserStoreActions;
    payload: User;
  }
): User => {
  switch (action.type) {
    case "GET_NEW_USER":
      return action.payload;
    case "SET_NEW_USER":
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
