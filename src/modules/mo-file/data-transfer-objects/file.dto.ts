import { Expose, Type } from 'class-transformer';
import { FileTypeDto } from './file-type.dto';
import { FileTranslationDto } from './file-translation.dto';
import { UserPublicDto } from '@mogenius/user-dto';
import { BaseEntityDto } from '@mogenius/database-dto';

export class FileDto2 extends BaseEntityDto {
  @Type(() => FileTypeDto)
  @Expose()
  fileType: FileTypeDto;

  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => FileTranslationDto)
  @Expose()
  translations: FileTranslationDto[];

  @Expose()
  size: number;

  // file will be saved under this name
  @Expose()
  name: string;

  @Expose()
  fullName: string;

  @Expose()
  originName: string;

  @Expose()
  fullOriginName: string;

  @Type(() => Boolean)
  @Expose()
  published: boolean;

  @Expose()
  link: string;
}
