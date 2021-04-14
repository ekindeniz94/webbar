import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import * as _ from 'lodash';

export class AddPermissionRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  userId: string;

  @IsOptional()
  @IsString()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  // @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  permissions: string[];
}
