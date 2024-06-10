import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayrollMonthService } from "./payrollMonth.service";
import { PayrollMonthControllerBase } from "./base/payrollMonth.controller.base";

@swagger.ApiTags("payrollMonths")
@common.Controller("payrollMonths")
export class PayrollMonthController extends PayrollMonthControllerBase {
  constructor(protected readonly service: PayrollMonthService) {
    super(service);
  }
}
