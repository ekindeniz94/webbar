import { WorkspaceWorkloadCreateRepositoryRequestDto } from './workspace-workload-create-repository.request.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class WorkspaceWorkloadUpdateRepositoryRequestDto extends WorkspaceWorkloadCreateRepositoryRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  containerName: string;
}
