import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { BlogTranslationCreateRequestDto } from './blog-translation-create-request.dto';
import { FileDto } from '../../mo-file';

export class BlogCreateRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  author?: string;

  @IsOptional()
  @Type(() => FileDto)
  @Expose()
  teaserImage?: FileDto;

  @Type(() => BlogTranslationCreateRequestDto)
  @ValidateNested()
  @Expose()
  translations: BlogTranslationCreateRequestDto[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
