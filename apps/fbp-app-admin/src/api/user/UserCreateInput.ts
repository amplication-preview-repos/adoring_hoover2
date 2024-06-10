import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  emailVerified?: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  phoneVerified?: boolean | null;
  roles: InputJsonValue;
  username: string;
};
