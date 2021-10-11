import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ServicePatchRequestDto } from '../service/service-patch-request.dto';
import { ServiceGroupCreateRequestDto } from './service-group-create-request.dto';

export class ServiceGroupPatchRequestDto extends ServiceGroupCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
  
  @Expose()
  @Type(() => ServicePatchRequestDto)
  @ValidateNested()
  services: ServicePatchRequestDto[];
}
