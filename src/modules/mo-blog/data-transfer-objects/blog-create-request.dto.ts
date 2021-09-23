import { isBoolean, IsBoolean, IsNotEmpty, ValidateNested } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { BlogTranslationCreateRequestDto } from './blog-translation-create-request.dto';

export class BlogCreateRequestDto {
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
