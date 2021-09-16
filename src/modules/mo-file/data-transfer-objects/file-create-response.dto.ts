import { Expose, Type } from 'class-transformer';
import { FileTypeDto } from './file-type.dto';

export class FileCreateResponseDto {
  @Expose()
  seoUrl: string;

  @Expose()
  name: string;

  @Expose()
  fileName: string;

  @Expose()
  originName: string;

  @Type(() => FileTypeDto)
  @Expose()
  fileType: FileTypeDto;

  @Expose()
  size: number;

  @Expose()
  altText: string;

  @Expose()
  published: boolean;
}
