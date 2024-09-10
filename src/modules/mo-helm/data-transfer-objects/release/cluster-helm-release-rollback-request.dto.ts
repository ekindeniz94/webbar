import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmReleaseRollbackRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  revision: number;
}
