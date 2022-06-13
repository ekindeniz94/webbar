import { Expose, Transform, Type } from 'class-transformer';
import { FileTypeDto } from '../../mo-file';
import moment from 'moment';

export class JobPublicTeaserImageDto {
  @Expose()
  id: string;

  @Expose()
  imgSrc: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Expose()
  altText: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
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
