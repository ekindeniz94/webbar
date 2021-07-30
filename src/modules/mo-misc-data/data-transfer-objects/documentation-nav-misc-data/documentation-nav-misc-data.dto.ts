import { Expose, Transform, Type } from 'class-transformer';
import { UserPublicDto } from '../../../mo-user';
import { isArray } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { DocumentationMiscDataDto } from '../documentation-misc-data/documentation-misc-data.dto';

export class DocumentationNavMiscDataDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Type(() => DocumentationMiscDataDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  sublinks: DocumentationNavMiscDataDto[];

  @Expose()
  tags: string[];
}
