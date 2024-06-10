import { InputJsonValue } from "../../types";

export type ClaimCreateInput = {
  claimAmount?: number | null;
  consent?: boolean | null;
  invoice?: InputJsonValue;
  paymentProof?: InputJsonValue;
  status?: "Option1" | null;
};
