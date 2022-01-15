import { isArray, IsEnum, IsMimeType, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { FileTypeEnum } from '../enums/file-type.enum';

export class PersistentFileDto {
  @Expose()
  name: string;

  @Expose()
  type: PersistentFileDto;

  @Expose()
  relativePath: string;

  @Expose()
  isSymbolicLink: boolean;

  @Expose()
  extension?: string;

  @Expose()
  sizeInBytes: number;

  @Expose()
  size: string;

  @Expose()
  hash: string;

  @Expose()
  mimeType?: string;
}
