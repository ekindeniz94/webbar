import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { MoUtils } from '../../../../utils';
import { DTO_VALIDATION_CONST, IsInStringList } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';

export class NamespaceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MAX)
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.NAME.MATCHES, {
    message: '$property must conform to: a-z or 0-9 or - ;min 4, max 25 char'
  })
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SHORT_ID.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SHORT_ID.MAX)
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.SHORT_ID.MATCHES, {
    message: '$property must conform to: a-z or 0-9 ;min 6, max 6 char'
  })
  @Transform(({ value }) => value ?? MoUtils.nanoidSuperShort())
  @Expose()
  shortId: string;

  @IsNotEmpty()
  @IsString()
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.NAME.MATCHES, {
    message: '$property must conform to: a-z or 0-9 or - ;min 4, max 25 char'
  })
  @Expose()
  hostname: string;

  @IsNotEmpty()
  @IsString()
  @IsInStringList(DTO_VALIDATION_CONST.MO_USER_DOMAINS)
  @Expose()
  domain: string;

  @IsNotEmpty()
  @Type(() => SubscriptionDto)
  @Expose()
  subscription: SubscriptionDto;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.DESCRIPTION.MAX)
  @Expose()
  description: string;

  @IsOptional()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.ICON.MAX)
  @Expose()
  icon: string;
}
