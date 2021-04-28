import { SecondaryUser } from "./SecondaryUser";

export default interface Publication {
  title: string;
  date: Date;
  thumbnailUrl: string;
  author: SecondaryUser;
}
