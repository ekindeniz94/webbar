import { AddressDto, BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsOptional, isString } from 'class-validator';
import { UserCompanyDto } from './company/user-company.dto';
import { GroupDto } from '../group';
import { UserPublicDto } from './user-public.dto';
import moment from 'moment';

export class UserDto extends BaseEntityDto {
  @Exclude()
  createdBy: UserPublicDto;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Transform(({ value }) => {
    value = (value && isString(value) ? value.trim() : value)
      ?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
      ?.toLowerCase()
      .replace(/[^0-9+]/g, ' ')
      ?.replace(/ +/g, '');
    return value;
  })
  @Expose()
  phoneNumberPrefix: string;

  @Transform(({ value }) => {
    value = (value && isString(value) ? value.trim() : value)
      ?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
      ?.toLowerCase()
      .replace(/[^0-9]/g, ' ')
      ?.replace(/ +/g, '');
    return value;
  })
  @Expose()
  phoneNumber: string;

  @Type(() => UserCompanyDto)
  @Expose()
  company: UserCompanyDto;

  @Type(() => AddressDto)
  @Expose()
  address: AddressDto;

  @Type(() => AddressDto)
  @Expose()
  billingAddress: AddressDto;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  billingAddressEqualsAddress: boolean;

  @Expose()
  phoneNumberValidatedAt: string;

  @Expose()
  emailValidatedAt: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (value === true ? value : undefined))
  @Expose()
  isSuperAdmin: boolean;

  @Expose()
  agreedPrivacyTermsConditionsVersion: string;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  agreedPrivacyTermsConditionsDate: Date;

  @IsOptional()
  @Type(() => GroupDto)
  @Expose()
  groups: GroupDto[];

  get displayName(): string {
    if ((this.firstName && this.firstName.length > 0) || (this.lastName && this.lastName?.length > 0)) {
      return [`${this.firstName}`, `${this.lastName}`]
        .filter((item: string) => !!item && item.length > 0 && isString(item) && item !== 'undefined')
        .join(' ');
    }
    return this.email ?? this.id;
  }
}
