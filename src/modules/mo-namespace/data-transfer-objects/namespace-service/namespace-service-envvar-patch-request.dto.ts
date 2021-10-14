import { NamespaceServiceEnvVarCreateRequestDto } from './namespace-service-envvar-create-request.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

export class NamespaceServiceEnvVarPatchRequestDto extends NamespaceServiceEnvVarCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
