import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ChangelogCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  version: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  logText: string;
}
