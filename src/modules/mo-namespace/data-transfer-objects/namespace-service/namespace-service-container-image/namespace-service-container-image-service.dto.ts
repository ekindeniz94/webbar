import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceContainerImageEnvVarDto } from './namespace-service-container-image-env-var.dto';
import { NamespaceServiceContainerImagePortDto } from './namespace-service-container-image-port.dto';
import moment from 'moment';
import { AppDto } from '../../../../mo-app-library-dto';
import { NamespaceServiceKubernetesSettingsDto } from '../namespace-service-kubernetes-settings/namespace-service-kubernetes-settings.dto';
import { isBoolean, isString } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../../mo-core';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import { NamespaceServiceCreateRequestDto } from '../namespace-service-create-request.dto';
import { KeyVaultSecretDto } from '../../key-vault';
import { NamespaceServiceStateEnum } from '../../../enums';
import { PROJECT_CONST } from '../../../../mo-project-dto';

export class NamespaceServiceContainerImageServiceDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Expose()
  shortId: string;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.NAME.MAX)
  )
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  gitRepository: string;

  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitBranchTransform(params))
  @Expose()
  gitBranch: string;

  @Expose()
  containerImage: string;

  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @Expose()
  dockerfileName: string;

  @Transform(({ value }) => value ?? '.')
  @Expose()
  dockerContext: string;

  @Expose()
  state: NamespaceServiceStateEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;
}
