import { Expose, Type } from 'class-transformer';

export class HubspotUserDto {
  @Expose()
  moUserid: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Expose()
  deletedAt: string;

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
