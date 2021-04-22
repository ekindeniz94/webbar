import {
  ArrayMaxSize,
  ArrayNotEmpty,
  isArray,
  IsArray,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import * as _ from 'lodash';

export class AddPermissionRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 64))
  @Expose()
  userId: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 64))
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  @ArrayMaxSize(100)
  @MaxLength(128, {
    each: true,
  })
  @Transform(({ value }) =>
    ((value && isArray(value) ? _.uniq(value) : []) as string[]).map((item: string) => item?.substring(0, 128))
  )
  @Expose()
  permissions: string[];
}
