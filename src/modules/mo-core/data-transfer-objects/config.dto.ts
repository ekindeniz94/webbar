import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { PhoneCodeDto } from './phone-code.dto';

export class ConfigDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  domains: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  greekLetters: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  interests: string[];

  @Type(() => PhoneCodeDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  phoneCodes: PhoneCodeDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  productTypes: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  imageSizes: string[];
}
