import { Expose, Transform, Type } from 'class-transformer';
import { UserPublicDto } from '../../../mo-user';
import { isArray } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';

export class DocumentationMiscDataDto extends BaseEntityDto {
  @Expose()
  nextId: string;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Type(() => DocumentationMiscDataDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  translations: DocumentationMiscDataDto[];

  get contentString(): string {
    const content = this.content?.replace(/<[^>]*>/g, '');
    if (content.length > 20) {
      return `${content.slice(0, 20)}...`;
    }
    return content;
  }
}
