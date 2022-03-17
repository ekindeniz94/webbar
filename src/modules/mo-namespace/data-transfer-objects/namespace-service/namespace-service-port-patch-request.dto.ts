import { Expose } from 'class-transformer';
import { NamespaceServicePortCreateRequestDto } from './namespace-service-port-create-request.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class NamespaceServicePortPatchRequestDto extends NamespaceServicePortCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string | undefined;
}
