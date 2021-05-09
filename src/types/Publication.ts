import { User } from "./User";

export default interface Publication {
  title: string;
  date: Date;
  thumbnailUrl: string;
  author: User;
}
