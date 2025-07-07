import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class WorkspaceWorkloadCreateRepositoryWorkflowRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  fileName: string;

  // @IsNotEmpty()
  // @IsString()
  // @Expose()
  // cloneUrl: string;
  //
  // @IsNotEmpty()
  // @IsString()
  // @Expose()
  // branch: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  type: 'MO_TEMPLATE' | 'REPOSITORY';
}
