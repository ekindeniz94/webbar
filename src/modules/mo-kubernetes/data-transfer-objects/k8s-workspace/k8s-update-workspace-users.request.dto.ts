import { Expose, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sWorkspaceUserDto } from './k8s-workspace-user.dto';

export class K8sUpdateWorkspaceUsersRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  workspace: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => K8sWorkspaceUserDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  users: K8sWorkspaceUserDto[];
}
