/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PayrollMonthWhereUniqueInput } from "./PayrollMonthWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PayrollMonthUpdateInput } from "./PayrollMonthUpdateInput";

@ArgsType()
class UpdatePayrollMonthArgs {
  @ApiProperty({
    required: true,
    type: () => PayrollMonthWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PayrollMonthWhereUniqueInput)
  @Field(() => PayrollMonthWhereUniqueInput, { nullable: false })
  where!: PayrollMonthWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PayrollMonthUpdateInput,
  })
  @ValidateNested()
  @Type(() => PayrollMonthUpdateInput)
  @Field(() => PayrollMonthUpdateInput, { nullable: false })
  data!: PayrollMonthUpdateInput;
}

export { UpdatePayrollMonthArgs as UpdatePayrollMonthArgs };