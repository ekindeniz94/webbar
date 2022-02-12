import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, IsNumber } from 'class-validator';
import _ from 'lodash';

export class CountryDto {
  @Expose()
  code: string;

  @Expose()
  code3: string;

  @Type(() => Number)
  @Expose()
  isoId: number;

  @Expose()
  name: string;

  @Expose()
  currency: string;

  @Expose()
  currencyName: string;

  @Type(() => Number)
  @Transform(({ value }) => (value && IsNumber(value) ? value : 0.0))
  @Expose()
  taxPercent: number;

  @Expose()
  continent: string;

  @Expose()
  capitalCity: string;

  @Type(() => Number)
  @Transform(({ value }) => (value && IsNumber(value) ? value : 0.0))
  @Expose()
  capitalCityLat: number;

  @Type(() => Number)
  @Transform(({ value }) => (value && IsNumber(value) ? value : 0.0))
  @Expose()
  capitalCityLng: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  isEuMember: boolean;

  @Expose()
  phoneNumberPrefix: string;

  @Expose()
  domainTld: string;

  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []) as string[])
  @Expose()
  languages: string[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  isActive: boolean;
}
