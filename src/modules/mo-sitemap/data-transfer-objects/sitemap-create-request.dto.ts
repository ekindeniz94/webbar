import { isDate, IsDate, isEnum, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { SitemapFrequencyEnum } from './../enums';

export class SitemapCreateRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  contentId?: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @Expose()
  loc: string;

  @Transform(({ value }) => (value && isEnum(value, SitemapFrequencyEnum) ? value : SitemapFrequencyEnum.weekly))
  @IsEnum(SitemapFrequencyEnum)
  @Expose()
  changefreq: SitemapFrequencyEnum;
}
