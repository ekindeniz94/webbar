import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  isArray,
  IsEnum,
  IsFQDN,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { DEFAULT_KUBERNETES_CLUSTER } from '../kubernetes';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings-create-request.dto';
import { NamespaceServiceTypeEnum } from '../../enums';
import _ from 'lodash';

export class NamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DESCRIPTION.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DESCRIPTION.MAX
    )
  )
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsEnum(NamespaceServiceTypeEnum)
  @Transform(({ value }) => value ?? NamespaceServiceTypeEnum.DOCKER)
  @Expose()
  serviceType: NamespaceServiceTypeEnum;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX
    )
  )
  @Expose()
  gitRepository: string;

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsCreateRequestDto)
  // @Transform(({ value }) => value ?? DEFAULT_KUBERNETES_CLUSTER)
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsCreateRequestDto;

  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_ENTRIES)
  @IsFQDN({}, { each: true })
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_LENGTH, {
    each: true
  })
  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  cNames: string[];
}
