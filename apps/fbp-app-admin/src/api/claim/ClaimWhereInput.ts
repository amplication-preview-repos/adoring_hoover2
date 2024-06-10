import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ClaimWhereInput = {
  claimAmount?: FloatNullableFilter;
  consent?: BooleanNullableFilter;
  id?: StringFilter;
  invoice?: JsonFilter;
  paymentProof?: JsonFilter;
  status?: "Option1";
};
