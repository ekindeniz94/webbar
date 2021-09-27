import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import { UserPublicDto } from '../../mo-user';
import { JobTranslationDto } from './job-translation.dto';
import { isArray } from 'class-validator';
import { FileDto } from '../../mo-file';

export class JobDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => FileDto)
  @Expose()
  teaserImage: FileDto;

  @Transform(({ value }) => (isArray(value) ? value : []))
  @Type(() => JobTranslationDto)
  @Expose()
  translations: JobTranslationDto[];

  @Expose()
  published: boolean;
}
