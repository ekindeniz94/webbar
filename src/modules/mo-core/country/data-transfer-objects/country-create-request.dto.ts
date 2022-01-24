import {Expose, Transform, Type} from 'class-transformer';
import {isArray, isBoolean, IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import _ from 'lodash';

export class CountryCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  code: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  code3: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  isoId: number;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  currency: string;

  @IsString()
  @Expose()
  currencyName: string;

  @Transform(({ value }) => (value && IsNumber(value) ? value : 0.0))
  @IsNumber()
  @Expose()
  taxPercent: number;

  @IsString()
  @Expose()
  continent: string;

  @IsString()
  @Expose()
  capitalCity: string;

  @Transform(({ value }) => (value && IsNumber(value) ? value : 0.0))
  @IsNumber()
  @Expose()
  capitalCityLat: number;

  @Transform(({ value }) => (value && IsNumber(value) ? value : 0.0))
  @IsNumber()
  @Expose()
  capitalCityLng: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsBoolean()
  @Expose()
  isEuMember: boolean;

  @IsString()
  @Expose()
  phoneNumberPrefix: string;

  @IsString()
  @Expose()
  domainTld: string;

  @IsString({ each: true })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []) as string[])
  @Expose()
  languages: string[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsBoolean()
  @Expose()
  isActive: boolean;
}
