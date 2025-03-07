import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class K8sGetWorkspaceRequestDto {
  @Transform(({ value, obj }) => value ?? obj.workspaceName)
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;
}
