import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { FileTypeDto } from './file-type.dto';
import { BaseEntityDto } from '../../../mo-core';

export class FilePublicMiscDataDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

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
