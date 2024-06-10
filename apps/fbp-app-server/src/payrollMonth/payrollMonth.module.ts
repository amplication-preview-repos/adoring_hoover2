import { Module } from "@nestjs/common";
import { PayrollMonthModuleBase } from "./base/payrollMonth.module.base";
import { PayrollMonthService } from "./payrollMonth.service";
import { PayrollMonthController } from "./payrollMonth.controller";
import { PayrollMonthResolver } from "./payrollMonth.resolver";

@Module({
  imports: [PayrollMonthModuleBase],
  controllers: [PayrollMonthController],
  providers: [PayrollMonthService, PayrollMonthResolver],
  exports: [PayrollMonthService],
})
export class PayrollMonthModule {}
