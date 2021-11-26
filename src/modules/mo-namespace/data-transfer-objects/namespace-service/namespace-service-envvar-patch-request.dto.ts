import { NamespaceServiceEnvVarCreateRequestDto } from './namespace-service-envvar-create-request.dto';
import { IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class NamespaceServiceEnvVarPatchRequestDto extends NamespaceServiceEnvVarCreateRequestDto {
  @IsOptional()
  @Expose()
  id: string;
}
