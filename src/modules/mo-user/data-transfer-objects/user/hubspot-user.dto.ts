import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { MoUtils } from '../../../../utils';

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
      const regex = new RegExp(`(?<=MO)([${MoUtils.nanoidAlphabet}]{23})(?=__)`, 'g');
      if (isString(value) && value.startsWith('MO') && value.match(regex)?.length === 1) {
        const valueArr = value.split('__');
        if (valueArr.length > 1) {
          valueArr.shift();
        }
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
