import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class WorkspaceWorkloadCreateRepositoryBuildArgRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  key: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  value: string;
}
