import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import { NamespaceServicePortCreateRequestDto } from './namespace-service-port-create-request.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class NamespaceServicePortDto extends NamespaceServicePortCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
