import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { BlogCreateRequestDto } from './blog-create-request.dto';
import { BlogTranslationPatchRequestDto } from './blog-translation-patch-request.dto';

export class BlogPatchRequestDto extends BlogCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => BlogTranslationPatchRequestDto)
  @ValidateNested()
  @Expose()
  translations: BlogTranslationPatchRequestDto[];
}
