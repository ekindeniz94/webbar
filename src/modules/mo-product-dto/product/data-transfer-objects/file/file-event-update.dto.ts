import { Expose, Type } from 'class-transformer';
import { FileListItemDto } from './file-list-item.dto';
import { IsOptional, IsString } from 'class-validator';
import { FileEventUpdateEnum } from '../../enums/file-event-update.enum';

export class FileEventUpdateDto {
  @Expose()
  @IsString()
  absolutePath: string;

  @Expose()
  event: FileEventUpdateEnum;

  @Expose()
  @IsOptional()
  @Type(() => FileListItemDto)
  item: FileListItemDto;
}
