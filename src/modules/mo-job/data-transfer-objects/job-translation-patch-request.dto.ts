import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { JobTranslationCreateRequestDto } from './job-translation-create-request.dto';

export class JobTranslationPatchRequestDto extends JobTranslationCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string;
}
