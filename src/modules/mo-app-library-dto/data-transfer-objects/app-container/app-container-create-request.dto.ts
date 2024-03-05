import { BaseEntityDto } from '@mo/database-dto';
import { Expose, Transform, Type } from 'class-transformer';
import { ContainerTypeEnum } from '../../../mo-project-dto/enums/container-type.enum';
import {
  isArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  isString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { MoProjectDtoUtils } from '../../../mo-project-dto/mo-project-dto.utils';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';
import { ProjectNamespaceServiceContainerKubernetesSettingsDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-container/project-namespace-service-container-kubernetes-settings.dto';
import { AppPortDto } from '../app-port.dto';
import { AppEnvVarCreateRequestDto } from '../app-envvar-create-request.dto';
import { AppKubernetesLimitsCreateRequestDto } from '../app-kubernetes-limits-create-request.dto';

export class AppContainerCreateRequestDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsEnum(ContainerTypeEnum)
  @Transform(({ value }) => value ?? ContainerTypeEnum.GIT_REPOSITORY)
  @Expose()
  type: ContainerTypeEnum;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.K8S_NAME.MAX)
  ) // containerImageName ohne tag xxx:yyy, type=git = controllerName // TODO
  @Expose()
  name: string;

  /************************************************************************************************************
   * type => DOCKER_TEMPLATE
   ************************************************************************************************************/
  @IsNotEmpty()
  @IsString()
  @ValidateIf((obj: AppContainerCreateRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @Expose()
  repositoryLink?: string;

  @IsOptional()
  @IsString()
  @Expose()
  repositoryUser?: string;

  @IsOptional()
  @IsString()
  @Expose()
  repositoryPAT?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value === 'null' || value === 'undefined' ? '' : value))
  @Expose()
  setupCommands: string;

  /************************************************************************************************************
   * type => CONTAINER_IMAGE_TEMPLATE
   ************************************************************************************************************/
  @IsNotEmpty()
  @IsString()
  @ValidateIf((obj: AppContainerCreateRequestDto) => obj.type === ContainerTypeEnum.CONTAINER_IMAGE)
  @IsString()
  @Expose()
  containerImage: string;

  @IsOptional()
  @IsString()
  @Expose()
  containerImageCommand: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      PROJECT_CONST.SERVICE.CONTAINER_IMAGE_COMMAND_ARGS.MAX
    )
  )
  @Expose()
  containerImageCommandArgs: string;

  @IsOptional()
  @IsString()
  @Expose()
  containerImageRepoSecret?: string;
  /************************************************************************************************************/

  @IsOptional()
  @Type(() => AppPortDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  ports: AppPortDto[];

  @IsOptional()
  @Type(() => AppKubernetesLimitsCreateRequestDto)
  @ValidateNested({ each: true, message: '$property must be an object' })
  @Expose()
  kubernetesLimits: AppKubernetesLimitsCreateRequestDto;

  @IsOptional()
  @Type(() => AppEnvVarCreateRequestDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  envVars: AppEnvVarCreateRequestDto[];
}
