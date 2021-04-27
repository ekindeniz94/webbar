import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';

export class FileMiscDataCreateRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(512)
  @Transform(({ value }) => value?.substring(0, 512))
  @Expose()
  altText: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
