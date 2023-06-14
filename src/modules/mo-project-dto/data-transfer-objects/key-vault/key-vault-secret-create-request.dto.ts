import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';

export class KeyVaultSecretCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(PROJECT_CONST.KEY_VAULT.NAME.MAX)
  @Matches(/^[a-zA-Z0-9-_]{1,50}$/, {
    message: '$property must conform to: a-z or A-Z or 0-9 or - ;min 6, max 50 char'
  })
  @StripTags()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(PROJECT_CONST.KEY_VAULT.VALUE.MAX)
  //@StripTags()
  @Expose()
  value: string;
}
