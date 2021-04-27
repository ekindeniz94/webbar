import { Expose, Transform, Type } from 'class-transformer';
import { FileTypeDto } from './file-type.dto';

export class FileMiscDataDto {
  @Expose()
  id: string;

  @Expose()
  createdBy: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Expose()
  seoUrl: string;

  @Expose()
  name: string;

  @Expose()
  originName: string;

  @Type(() => FileTypeDto)
  @Expose()
  fileType: FileTypeDto;

  @Expose()
  size: number;

  @Expose()
  fullName: string;

  @Expose()
  fullOriginName: string;

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
