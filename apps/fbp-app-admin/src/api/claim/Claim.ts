import { JsonValue } from "type-fest";

export type Claim = {
  claimAmount: number | null;
  consent: boolean | null;
  createdAt: Date;
  id: string;
  invoice: JsonValue;
  paymentProof: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
