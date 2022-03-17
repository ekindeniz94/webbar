import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ServiceCreateRequestDto } from './service-create-request.dto';
import { ServicePortPatchRequestDto } from './service-port-patch-request.dto';

export class ServicePatchRequestDto extends ServiceCreateRequestDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  @Expose()
  id?: string;

  @Type(() => ServicePortPatchRequestDto)
  @ValidateNested()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: ServicePortPatchRequestDto[];
}
