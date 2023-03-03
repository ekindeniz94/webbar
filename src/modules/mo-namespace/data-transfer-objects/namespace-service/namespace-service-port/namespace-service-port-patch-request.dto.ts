import { Expose } from 'class-transformer';
import { NamespaceServicePortCreateRequestDto } from './namespace-service-port-create-request.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { StripTags } from '@mo/js-utils';

export class NamespaceServicePortPatchRequestDto extends NamespaceServicePortCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id?: string | undefined;
}
