import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GithubActionsRunsLogsRequestDto {
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
  runId: string;
}
