import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { K8sGrantRoleEnum } from '../../enums/k8s-user-management/k8s-grant-role.enum';

export class K8sWorkspaceUserDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  email: string;

  @IsNotEmpty()
  @Expose()
  role: K8sGrantRoleEnum;
}
