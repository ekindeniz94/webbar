import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FileRequestDto {
  @Expose()
  @IsString()
  path: string;

  @Expose()
  @IsString()
  volumeNamespace: string;

  @Expose()
  @IsString()
  volumeName: string;
}
