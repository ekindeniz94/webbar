import { Expose } from 'class-transformer';
import { PersistentFileTypeEnum } from '../enums';

export class PersistentFileDto {
  @Expose()
  name: string;

  @Expose()
  type: PersistentFileTypeEnum;

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
  
  @Expose()
  createdAt?: string;

  @Expose()
  modifiedAt?: string;

  @Expose()
  uid_gid?: string;
}
