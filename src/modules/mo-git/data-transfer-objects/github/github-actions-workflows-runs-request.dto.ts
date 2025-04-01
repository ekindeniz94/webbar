import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GithubActionsWorkflowsRunsRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  cloneUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  branch: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  workflowId: string;
}
