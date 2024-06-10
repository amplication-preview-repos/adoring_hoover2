import { SortOrder } from "../../util/SortOrder";

export type PayrollMonthOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  month?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
