import { Expose, Transform } from 'class-transformer';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import { isBoolean, IsBoolean, IsNotEmpty } from 'class-validator';

export class NamespaceServicePortCreateRequestDto {
  @IsNotEmpty()
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  spectrumEnableTls: boolean;
}
