import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServiceEnvVarTypeEnum } from '../../enums/namespace-envvar-type.enum';

export class NamespaceServiceEnvVarDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  value: string;

  @Expose()
  type: NamespaceServiceEnvVarTypeEnum;
}
