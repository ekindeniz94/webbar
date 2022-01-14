import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { PlanCreateRequestDto } from './plan-create-request.dto';

export class PlanPatchRequestDto extends PlanCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
