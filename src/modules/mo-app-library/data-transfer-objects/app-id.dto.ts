import { Expose } from 'class-transformer';
import { AppLibraryTypeEnum } from '../enums';

export class AppIdDto {
  @Expose()
  id: string;
}
