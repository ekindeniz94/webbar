import { WorkspaceWorkloadCreateRepositoryRequestDto } from './workspace-workload-create-repository.request.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class WorkspaceWorkloadUpdateRepositoryRequestDto extends WorkspaceWorkloadCreateRepositoryRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  declare apiKey: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  containerName: string;
}
