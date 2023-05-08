import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FileRenameRequestDto {
  @Expose()
  @IsString()
  path: string;

  @Expose()
  @IsString()
  newName: string;
}
