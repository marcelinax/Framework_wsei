import { User } from "../types/User";

const initState: User[] = [];

type GET_USERS = "GET_USERS";
type UserStoreActions = GET_USERS;

export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    type: "GET_USERS",
    payload: users,
  };
};

const usersReducer = (
  state: User[] = initState,
  action: {
    type: UserStoreActions;
    payload: User[];
  }
): User[] => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
