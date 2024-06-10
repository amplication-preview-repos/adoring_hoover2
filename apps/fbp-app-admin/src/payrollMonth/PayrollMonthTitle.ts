import { PayrollMonth as TPayrollMonth } from "../api/payrollMonth/PayrollMonth";

export const PAYROLLMONTH_TITLE_FIELD = "month";

export const PayrollMonthTitle = (record: TPayrollMonth): string => {
  return record.month?.toString() || String(record.id);
};
