import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { ClusterHelmRepoAddRequestDto } from './cluster-helm-repo-add-request.dto';

export class ClusterHelmRepoPatchRequestDto extends ClusterHelmRepoAddRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  newName: string;
}
