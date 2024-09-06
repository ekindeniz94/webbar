import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmRepoRemoveRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;
}
