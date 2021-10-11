import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ServiceCreateRequestDto } from './service-create-request.dto';

export class ServicePatchRequestDto extends ServiceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
