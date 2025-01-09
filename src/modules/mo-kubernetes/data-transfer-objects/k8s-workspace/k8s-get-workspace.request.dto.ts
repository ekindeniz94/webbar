import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class K8sGetWorkspaceRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;
}
