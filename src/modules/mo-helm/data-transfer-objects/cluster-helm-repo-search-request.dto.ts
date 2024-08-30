import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmRepoSearchRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  repo: string;
}
