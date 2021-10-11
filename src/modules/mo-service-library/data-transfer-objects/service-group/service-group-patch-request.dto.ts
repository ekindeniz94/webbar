import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ServiceGroupCreateRequestDto } from './service-group-create-request.dto';

export class ServiceGroupPatchRequestDto extends ServiceGroupCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
