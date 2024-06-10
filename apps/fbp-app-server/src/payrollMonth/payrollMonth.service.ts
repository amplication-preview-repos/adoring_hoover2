import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayrollMonthServiceBase } from "./base/payrollMonth.service.base";

@Injectable()
export class PayrollMonthService extends PayrollMonthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
