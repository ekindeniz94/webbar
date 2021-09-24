import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import { UserPublicDto } from '../../mo-user';
import { JobTranslationDto } from './job-translation.dto';

export class JobDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => JobTranslationDto)
  @Expose()
  translations: JobTranslationDto[];

  @Expose()
  published: boolean;
}
