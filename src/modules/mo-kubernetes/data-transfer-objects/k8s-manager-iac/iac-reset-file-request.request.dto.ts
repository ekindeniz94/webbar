import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class IacResetFileRequestRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  filePath: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  commitHash: string;
}
