import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { ImageSizeEnum } from '../../enums';

export class FileSizeDto {
  @IsNumber()
  @Expose()
  size: ImageSizeEnum;

  @IsString()
  @Expose()
  name: string;
}
