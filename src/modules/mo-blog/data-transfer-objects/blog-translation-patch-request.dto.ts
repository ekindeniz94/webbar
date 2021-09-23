import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { BlogTranslationCreateRequestDto } from './blog-translation-create-request.dto';

export class BlogTranslationPatchRequestDto extends BlogTranslationCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string;
}
