import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PayrollMonthWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  month?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  year?: IntNullableFilter;
};
