import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class HubspotUserDto {
  @Expose()
  moUserid: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Expose()
  deletedAt: string;

  @Transform(({ value }) => {
    try {
      if (isString(value) && value.startsWith('MO')) {
        const valueArr = value.split('__');
        valueArr.shift();
        return valueArr.join('__');
      }
      return value;
    } catch (err) {
      console.error(err);
    }
    return value;
  })
  @Expose()
  email: string;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  emailValidatedAt: string;

  @Expose()
  phoneNumberValidatedAt: string;

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

  @Expose()
  countryCode: string;

  @Expose()
  companyName: string;

  @Type(() => Number)
  @Expose()
  numberOfCloudspaces: number;

  @Type(() => Number)
  @Expose()
  numberOfServices: number;
}
