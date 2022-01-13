import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import { NamespaceServicePortCreateRequestDto } from './namespace-service-port-create-request.dto';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class NamespaceServicePortPatchRequestDto extends NamespaceServicePortCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string | undefined;
}
