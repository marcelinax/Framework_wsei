import { User } from "../types/User";

export const emptyUser: User = {
  address: {
    city: "",
    street: "",
    suite: "",
    zipcode: "",
  },
  company: {
    name: "",
  },
  email: "",
  id: 1,
  name: "",
  phone: "",
};
