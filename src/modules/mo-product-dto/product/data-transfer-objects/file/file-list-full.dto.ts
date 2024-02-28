import { Expose, Type } from 'class-transformer';
import { FileListDto } from './file-list.dto';

export class FileListFullDto extends FileListDto {
  @Expose()
  @Type(() => FileListFullDto)
  child?: FileListFullDto[];
}
