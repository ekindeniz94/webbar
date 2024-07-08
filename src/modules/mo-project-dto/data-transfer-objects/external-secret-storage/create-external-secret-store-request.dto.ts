import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { MoProjectDtoUtils, PROJECT_CONST } from './../../';

export class CreateExternalSecretStoreRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX - 16))
  @Expose()
  namePrefix: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  role: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  vaultServerUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  moSharedPath: string;
}
