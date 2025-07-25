import { Expose, Transform, Type } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';
import { MoUtils } from '@mogenius/js-utils';

export class FileListItemDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsString()
  relativePath: string;

  @Expose()
  @IsInt()
  sizeInBytes: number;

  @Expose()
  @IsString()
  size: string;

  @Expose()
  @IsString()
  hash: string;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @IsDate()
  modifiedAt: Date;

  @Expose()
  @IsString()
  uid_gid: string;

  @Expose()
  @IsString()
  mode: string;

  @Expose()
  @Transform(({ value }) => (value ? MoUtils.removeLastSlashes(value.replace(/^\/\//, '/')) : value))
  @IsString()
  absolutePath: string;

  @Expose()
  @IsString()
  resource: string;

  @Type(() => FileListItemDto)
  @Expose()
  children: FileListItemDto[];
}
