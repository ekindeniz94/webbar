import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsString } from 'class-validator';
import { BaseEntityDto } from '../../mo-core';

export class AppTagDto {
  @IsString()
  @Expose()
  name: string;

  @Expose()
  createdAt: string | Date;

  @Expose()
  updatedAt: string | Date;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  isActive: boolean;
}
