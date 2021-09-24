import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { JobCreateRequestDto } from './job-create-request.dto';
import { JobTranslationPatchRequestDto } from './job-translation-patch-request.dto';

export class JobPatchRequestDto extends JobCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => JobTranslationPatchRequestDto)
  @ValidateNested()
  @Expose()
  translations: JobTranslationPatchRequestDto[];
}
