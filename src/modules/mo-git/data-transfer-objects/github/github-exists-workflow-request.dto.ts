import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GithubExistsWorkflowRequestDto {
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
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  resourceName: string;
}
