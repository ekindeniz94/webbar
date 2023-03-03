import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import { BlogTranslationDto } from './blog-translation.dto';
import { isArray } from 'class-validator';
import { FileDto } from '../../mo-file';
import { UserPublicDto } from '@mo/user-dto';

export class BlogDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Expose()
  author?: string;

  @Type(() => FileDto)
  @Expose()
  teaserImage: FileDto;

  @Type(() => BlogTranslationDto)
  @Transform(({ value }) => (isArray(value) ? value : []))
  @Expose()
  translations: BlogTranslationDto[];

  @Type(() => Boolean)
  @Expose()
  published: boolean;
}
