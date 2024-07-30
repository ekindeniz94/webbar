import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { MoProjectDtoUtils, PROJECT_CONST } from '../..';

export class DeleteExternalSecretStoreRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX - 16))
  @Expose()
  namePrefix: string;
}
