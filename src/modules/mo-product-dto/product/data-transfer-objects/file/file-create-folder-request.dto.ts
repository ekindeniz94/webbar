import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FileCreateFolderRequestDto {
  @Expose()
  @IsString()
  path: string;
}
