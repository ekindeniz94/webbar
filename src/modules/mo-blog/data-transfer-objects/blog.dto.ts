import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import { UserPublicDto } from '../../mo-user';
import { BlogTranslationDto } from './blog-translation.dto';

export class BlogDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => BlogTranslationDto)
  @Expose()
  translations: BlogTranslationDto[];

  @Expose()
  published: boolean;
}
