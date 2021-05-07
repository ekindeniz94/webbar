import { BaseEntityDto } from '../../../mo-core';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { isBoolean, isString } from 'class-validator';
import { UserCompanyDto } from './user-company.dto';
import { UserAddressDto } from './user-address.dto';

export class UserDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;

  @Type(() => UserCompanyDto)
  @Expose()
  company: UserCompanyDto;

  @Type(() => UserAddressDto)
  @Expose()
  address: UserAddressDto;

  @Type(() => UserAddressDto)
  @Expose()
  billingAddress: UserAddressDto;

  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  billingAddressEqualsAddress: boolean;

  @Expose()
  phoneNumberValidatedAt: string;

  @Expose()
  emailValidatedAt: string;

  get displayName(): string {
    if ((this.firstName && this.firstName.length > 0) || (this.lastName && this.lastName?.length > 0)) {
      return [`${this.firstName}`, `${this.lastName}`]
        .filter((item: string) => !!item && item.length > 0 && isString(item) && item !== 'undefined')
        .join(' ');
    }
    return this.email ?? this.id;
  }
}
