import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FileChownRequestDto {
  @Expose()
  @IsString()
  path: string;

  @Expose()
  @IsString()
  uid: string;

  @Expose()
  @IsString()
  gid: string;
}
