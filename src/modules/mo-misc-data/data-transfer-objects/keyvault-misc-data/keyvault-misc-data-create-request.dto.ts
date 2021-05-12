import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class KeyvaultMiscDataCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.MISC.KEYVAULT.NAME.MAX)
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.MISC.KEYVAULT.ENCRYPTEDVALUE.MAX)
  @Expose()
  encryptedValue: string;
}
