import { Expose, Transform, Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  isString,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { KeyVaultSecretDto } from '../../key-vault';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../../mo-project-dto.const';
import { isServiceContainerImageType, isServiceGitRepositoryType, ServiceTypeEnum } from '../../../enums';
import { MoProjectDtoUtils } from '../../../mo-project-dto.utils';
import { ProjectNamespaceServiceGitSettingsCreateRequestDto } from '../../project-namespace-service-git-settings';

export class ProjectNamespaceServiceContainerCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(ServiceTypeEnum)
  @Expose()
  type: ServiceTypeEnum;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @StripTags()
  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  ) // containerImageName ohne tag xxx:yyy, type=git = controllerName // TODO
  @Expose()
  name: string;

  /****** Repository type ******/
  @IsNotEmpty()
  @IsObject({ message: '$property must be an object' })
  @Type(() => ProjectNamespaceServiceGitSettingsCreateRequestDto)
  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => isServiceGitRepositoryType(obj.type))
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  gitSettings: ProjectNamespaceServiceGitSettingsCreateRequestDto;

  /****** Container image type ******/
  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => isServiceContainerImageType(obj.type))
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  containerImage: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => isServiceContainerImageType(obj.type))
  @IsOptional()
  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => isServiceContainerImageType(obj.type))
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => isServiceContainerImageType(obj.type))
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;
}
