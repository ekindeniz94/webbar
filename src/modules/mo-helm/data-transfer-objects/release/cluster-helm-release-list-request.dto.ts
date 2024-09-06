import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmReleaseListRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  namespace: string;
}
