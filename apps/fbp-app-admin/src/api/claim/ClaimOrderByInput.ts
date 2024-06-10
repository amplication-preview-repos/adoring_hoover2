import { SortOrder } from "../../util/SortOrder";

export type ClaimOrderByInput = {
  claimAmount?: SortOrder;
  consent?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  invoice?: SortOrder;
  paymentProof?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
