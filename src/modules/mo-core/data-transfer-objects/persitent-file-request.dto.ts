import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PersistentFileRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  root: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  path: string;

  @IsOptional()
  @IsString()
  @Expose()
  clusterId?: string;
}
