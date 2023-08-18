import { User } from "./User";

export type SignInResponse = {
  token: string;
  user: User;
};
