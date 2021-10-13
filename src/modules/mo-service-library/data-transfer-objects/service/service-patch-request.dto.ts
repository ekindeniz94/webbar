import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { ServiceCreateRequestDto } from './service-create-request.dto';

export class ServicePatchRequestDto extends ServiceCreateRequestDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  @Expose()
  id?: string;
}
