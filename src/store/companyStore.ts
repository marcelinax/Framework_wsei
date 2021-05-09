import { Company } from "../types/Company";

const initState: Company[] = [];

type GET_COMPANIES = "GET_COMPANIES";
type CompanyStoreActions = GET_COMPANIES;

export const getCompanies = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    type: "GET_COMPANIES",
    payload: users.map((u: { company: any; id: number }) => ({
      ...u.company,
      id: u.id,
    })),
  };
};

const companiesReducer = (
  state: Company[] = initState,
  action: {
    type: CompanyStoreActions;
    payload: Company[];
  }
): Company[] => {
  switch (action.type) {
    case "GET_COMPANIES":
      return action.payload;
    default:
      return state;
  }
};

export default companiesReducer;
