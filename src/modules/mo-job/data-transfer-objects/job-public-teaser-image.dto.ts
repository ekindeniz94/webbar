import { Expose, Type } from 'class-transformer';
import { FileTypeDto } from '../../mo-file';

export class JobPublicTeaserImageDto {
  @Expose()
  id: string;

  @Expose()
  imgSrc: string;

  @Expose()
  createdAt: Date;

  @Expose()
  altText: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  seoUrl: string;

  @Expose()
  title: string;

  @Expose()
  caption: string;

  @Type(() => FileTypeDto)
  @Expose()
  fileType: FileTypeDto;
}
