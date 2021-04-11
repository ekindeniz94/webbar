import { isArray, IsBoolean, IsHexColor, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import * as _ from 'lodash';

export class JobMiscDataCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsHexColor()
  @Expose()
  bgColor: string;

  @IsNotEmpty()
  @IsHexColor()
  @Expose()
  textColor: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  shortName: string;

  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  tags: string[];

  @IsNotEmpty()
  @IsString()
  @Expose()
  content: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  teaserText: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  teaserImage: string;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;

  @IsOptional()
  @IsString()
  @Expose()
  authorId: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  groups: string[];
}
