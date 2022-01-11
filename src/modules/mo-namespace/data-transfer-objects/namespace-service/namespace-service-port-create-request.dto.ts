import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';

export class NamespaceServicePortCreateRequestDto extends BaseEntityDto {
  @Expose()
  spectrumEnableTls: boolean;
}
