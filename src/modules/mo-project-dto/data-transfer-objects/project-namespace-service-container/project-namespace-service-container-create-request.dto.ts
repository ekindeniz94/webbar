import { Expose, Transform, Type } from 'class-transformer';
import {
  IsEnum, IsJSON,
  IsNotEmpty,
  IsObject,
  IsOptional,
  isString,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { KeyVaultSecretDto } from '../key-vault';
import { StripTags } from '@mo/js-utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { ProjectNamespaceServiceContainerGitSettingsCreateRequestDto } from '../project-namespace-service-container-git-settings';
import { ContainerTypeEnum } from '../../enums';
import { IdRequiredDto } from '@mo/core-dto';

export class ProjectNamespaceServiceContainerCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(ContainerTypeEnum)
  @Expose()
  type: ContainerTypeEnum;

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
  @Type(() => ProjectNamespaceServiceContainerGitSettingsCreateRequestDto)
  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  gitSettings: ProjectNamespaceServiceContainerGitSettingsCreateRequestDto;

  /****** Container image type ******/
  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  containerImage: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsOptional()
  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsOptional()
  @IsString()
  @IsJSON()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @ValidateIf((obj: ProjectNamespaceServiceContainerCreateRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsOptional()
  @IsString()
  @IsJSON()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;

  @IsOptional()
  @Type(() => IdRequiredDto)
  @ValidateNested()
  @Expose()
  appContainer: IdRequiredDto;
}
