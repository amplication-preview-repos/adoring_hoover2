import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  consumedFbp?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  totalFbp?: SortOrder;
  updatedAt?: SortOrder;
};
