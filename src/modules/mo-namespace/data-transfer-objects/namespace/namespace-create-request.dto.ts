import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { IsInStringList } from '../../../mo-core/validation-decorators';

export class NamespaceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MAX)
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.NAME.MATCHES, {
    message: '$property must conform to: a-z or A-Z or 0-9 or - or _ ;min 6, max 30 char'
  })
  @Expose()
  hostname: string;

  @IsNotEmpty()
  @IsString()
  @IsInStringList(DTO_VALIDATION_CONST.MO_USER_DOMAINS)
  @Expose()
  domain: string;

  @IsString()
  @Expose()
  description: string;

  @IsOptional()
  @Expose()
  icon: string;
}
