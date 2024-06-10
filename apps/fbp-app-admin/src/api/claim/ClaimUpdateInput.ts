import { InputJsonValue } from "../../types";

export type ClaimUpdateInput = {
  claimAmount?: number | null;
  consent?: boolean | null;
  invoice?: InputJsonValue;
  paymentProof?: InputJsonValue;
  status?: "Option1" | null;
};
