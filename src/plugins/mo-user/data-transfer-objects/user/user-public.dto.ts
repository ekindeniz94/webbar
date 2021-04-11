import moment from 'moment';
import { isArray, isBoolean, isString, IsString } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { UserApiKeyDto } from './user-api-key.dto';
import { UserOneTimeKeyDto } from './user-one-time-key.dto';
import { UserPurchasedProductDto } from './user-purchased-product.dto';
import { UserCompanyDto } from './user-company.dto';
import { UserAddressDto } from './user-address.dto';

export class UserPublicDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  get displayName(): string {
    if ((this.firstName && this.firstName.length > 0) || (this.lastName && this.lastName?.length > 0)) {
      return [this.firstName, this.lastName]
        .filter((item: string) => item && item.length > 0 && isString(item))
        .join(' ');
    }
    return this.email ?? this.id;
  }
}
