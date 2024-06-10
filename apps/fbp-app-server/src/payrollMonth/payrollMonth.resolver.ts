import * as graphql from "@nestjs/graphql";
import { PayrollMonthResolverBase } from "./base/payrollMonth.resolver.base";
import { PayrollMonth } from "./base/PayrollMonth";
import { PayrollMonthService } from "./payrollMonth.service";

@graphql.Resolver(() => PayrollMonth)
export class PayrollMonthResolver extends PayrollMonthResolverBase {
  constructor(protected readonly service: PayrollMonthService) {
    super(service);
  }
}
