import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';
import { ImageSizeEnum } from '../enums';

export class FileSizeDto {
  @IsEnum(ImageSizeEnum)
  @Expose()
  size: ImageSizeEnum;

  @IsString()
  @Expose()
  name: string;
}
