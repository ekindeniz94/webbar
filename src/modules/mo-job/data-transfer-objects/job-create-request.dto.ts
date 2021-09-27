import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { JobTranslationCreateRequestDto } from './job-translation-create-request.dto';
import { FileDto } from '../../mo-file';

export class JobCreateRequestDto {
  @IsOptional()
  @Type(() => FileDto)
  @Expose()
  teaserImage?: FileDto;

  @Type(() => JobTranslationCreateRequestDto)
  @ValidateNested()
  @Expose()
  translations: JobTranslationCreateRequestDto[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
