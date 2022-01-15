import { Expose, Transform, Type } from 'class-transformer';

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
