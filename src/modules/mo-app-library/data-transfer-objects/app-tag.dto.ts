import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsString } from 'class-validator';
import { BaseEntityDto } from '../../mo-core';

export class AppTagDto extends BaseEntityDto {
  @IsString()
  @Expose()
  name: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  isActive: boolean;
}
