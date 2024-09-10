import { IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class ClusterHelmReleaseListRequestDto {
  @IsOptional()
  @Transform(({ value }) => value ?? '')
  @IsString()
  @Expose()
  namespace: string;
}
