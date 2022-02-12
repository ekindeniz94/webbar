import {Expose, Transform, Type} from 'class-transformer';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import { isBoolean, IsBoolean, IsNotEmpty } from 'class-validator';

export class NamespaceServicePortCreateRequestDto {
  @IsNotEmpty()
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  spectrumEnableTls: boolean;
}
