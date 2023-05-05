import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { FileListItemDto } from './file-list-item.dto';

export class FileListDto {
  @Expose()
  @IsString()
  path: string;
  @Expose()
  @Type(() => FileListItemDto)
  items: FileListItemDto[];
}
