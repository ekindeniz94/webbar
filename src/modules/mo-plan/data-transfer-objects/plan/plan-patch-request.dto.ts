import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { PlanCreateRequestDto } from './plan-create-request.dto';

export class PlanPatchRequestDto extends PlanCreateRequestDto {}
