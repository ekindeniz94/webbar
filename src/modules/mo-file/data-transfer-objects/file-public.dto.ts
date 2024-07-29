import { Expose, Transform, Type } from 'class-transformer';
import { FileTypeDto } from './file-type.dto';
import { BaseEntityDto } from '@mogenius/database-dto';

export class FilePublicDto2 extends BaseEntityDto {
  @Expose()
  seoUrl: string;

  @Expose()
  name: string;

  @Type(() => FileTypeDto)
  @Expose()
  fileType: FileTypeDto;

  @Expose()
  size: number;

  @Expose()
  fullName: string;

  @Expose()
  altText: string;

  @Type(() => Boolean)
  @Expose()
  published: boolean;

  @Transform(({ value, obj }) => {
    if (value && value.indexOf(`/${obj.seoUrl}`) === -1) {
      return `${value}/${obj.seoUrl}`;
    }
    return value;
  })
  @Expose()
  link: string;
}
