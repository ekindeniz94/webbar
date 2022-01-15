import { Expose } from 'class-transformer';

export class PersistentFileRequestDto {
  @Expose()
  root: string;

  @Expose()
  path: string;
}
