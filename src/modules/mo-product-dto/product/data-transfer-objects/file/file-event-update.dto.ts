import { Expose, Type } from 'class-transformer';
import { FileListItemDto } from './file-list-item.dto';
import { IsOptional, IsString } from 'class-validator';

export class FileEventUpdateDto {
  @Expose()
  @IsString()
  absolutePath: string;

  @Expose()
  event: 'DELETED' | 'CREATED' | 'UPDATED';

  @Expose()
  @IsOptional()
  @Type(() => FileListItemDto)
  item: FileListItemDto;
}
