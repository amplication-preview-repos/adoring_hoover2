import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emailVerified: boolean | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  phoneVerified: boolean | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
