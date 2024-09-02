import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmHistoryRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;
}
