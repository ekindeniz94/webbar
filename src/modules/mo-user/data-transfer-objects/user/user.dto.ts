import { AddressDto, BaseEntityDto } from '../../../mo-core';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsOptional, isString } from 'class-validator';
import { UserCompanyDto } from './company/user-company.dto';
import { GroupDto } from '../group';
import { UserPublicDto } from './user-public.dto';

export class UserDto extends BaseEntityDto {
  @Exclude()
  createdBy: UserPublicDto;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumberPrefix: string;

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

  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  billingAddressEqualsAddress: boolean;

  @Expose()
  phoneNumberValidatedAt: string;

  @Expose()
  emailValidatedAt: string;

  @Expose()
  isSuperAdmin: boolean;

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
