import { Expose, Type } from 'class-transformer';

export class PersistentFileUploadDto {
  @Expose()
  originalname: string;

  @Type(() => Number)
  @Expose()
  sizeInBytes: number;

  @Type(() => Boolean)
  @Expose()
  success: boolean;

  @Expose()
  statusMsg: string;
}
