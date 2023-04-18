import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, isString } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { NamespaceServiceStateEnum } from '../../enums';
import { KubernetesPublicEventDto } from '../../../mo-kubernetes/data-transfer-objects/kubernetes-public-event.dto';
import { PROJECT_CONST } from '../../../mo-project-dto';

export class NamespaceServiceFlatDto extends BaseEntityDto {
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

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => KubernetesPublicEventDto)
  @Expose()
  messages: KubernetesPublicEventDto[];
}
