import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FileChmodRequestDto {
  @Expose()
  @IsString()
  path: string;

  @Expose()
  @IsString()
  mod: string;
}
