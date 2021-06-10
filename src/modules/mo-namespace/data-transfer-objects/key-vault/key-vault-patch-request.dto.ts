import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class KeyVaultPatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.KEY_VAULT.NAME.MAX)
  @Matches(/^[a-zA-Z0-9-_]{6,50}$/, {
    message: '$property must conform to: a-z or A-Z or 0-9 or - or _ ;min 6, max 50 char'
  })
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.KEY_VAULT.VALUE.MAX)
  @Expose()
  value: string;
}
