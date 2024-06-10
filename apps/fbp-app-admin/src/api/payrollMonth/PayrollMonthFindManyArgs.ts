import { PayrollMonthWhereInput } from "./PayrollMonthWhereInput";
import { PayrollMonthOrderByInput } from "./PayrollMonthOrderByInput";

export type PayrollMonthFindManyArgs = {
  where?: PayrollMonthWhereInput;
  orderBy?: Array<PayrollMonthOrderByInput>;
  skip?: number;
  take?: number;
};
