import { isBoolean, IsBoolean, IsNotEmpty, ValidateNested } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { JobTranslationCreateRequestDto } from './job-translation-create-request.dto';

export class JobCreateRequestDto {
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
