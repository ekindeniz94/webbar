import { Expose } from 'class-transformer';

export class PersistentFileUploadDto {
  @Expose()
  originalname: string;

  @Expose()
  sizeInBytes: number;

  @Expose()
  success: boolean;

  @Expose()
  statusMsg: string;
}
