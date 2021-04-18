import moment from 'moment';
import { isArray, isBoolean, isString, IsString } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { UserApiKeyDto } from './user-api-key.dto';
import { UserOneTimeKeyDto } from './user-one-time-key.dto';
import { UserPurchasedProductDto } from './user-purchased-product.dto';
import { UserCompanyDto } from './user-company.dto';
import { UserAddressDto } from './user-address.dto';

export class UserDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  // @Expose()
  // scope: string;

  @Transform(({ value }) => moment(value).format(), { toClassOnly: true })
  @Expose()
  createdAt: string;

  @Transform(({ value }) => moment(value).format(), { toClassOnly: true })
  @Expose()
  updatedAt: string;

  @Type(() => UserApiKeyDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  apiKeys: UserApiKeyDto[];

  @Type(() => UserOneTimeKeyDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  oneTimeKeys: UserOneTimeKeyDto[];

  @Type(() => UserPurchasedProductDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  purchasedProducts: UserPurchasedProductDto[];

  @Expose()
  phoneNumber: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

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

  @Expose()
  createdBy: string;

  @Expose()
  groups: string[];

  @Expose()
  isSuperAdmin: boolean;

  // @Expose()
  // isSuperAdmin: boolean;

  get displayName(): string {
    if ((this.firstName && this.firstName.length > 0) || (this.lastName && this.lastName?.length > 0)) {
      return [this.firstName, this.lastName]
        .filter((item: string) => item && item.length > 0 && isString(item))
        .join(' ');
    }
    return this.email ?? this.id;
  }
}
