import { BaseEntityDto } from '@mogenius/database-dto';
import { Expose, Transform, Type } from 'class-transformer';
import { ContainerTypeEnum } from '../../../mo-project-dto/enums/container-type.enum';
import {
  isEmpty,
  IsEnum,
  IsJSON,
  IsNotEmpty,
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
import { AppContainerEnvVarCreateRequestDto } from './app-container-envvar-create-request.dto';
import { AppKubernetesLimitsCreateRequestDto } from '../app-kubernetes-limits-create-request.dto';
import { StripTags } from '@mogenius/js-utils';

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

  @IsNotEmpty()
  @IsString()
  @ValidateIf((obj: AppContainerCreateRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @Expose()
  repositoryBranch?: string;

  @Transform(({ value }) => (isString(value) ? value : 'Dockerfile'))
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @ValidateIf((obj: AppContainerCreateRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @Expose()
  dockerfileName?: string;

  @Transform(({ value }) => (isString(value) ? value : '.'))
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @ValidateIf((obj: AppContainerCreateRequestDto) => obj.type === ContainerTypeEnum.GIT_REPOSITORY)
  @Expose()
  dockerContext?: string;

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

  @Transform(({ value }) => {
    const trimmedValue = value && isString(value) ? value.trim() : value;
    return !trimmedValue || isEmpty(trimmedValue) ? undefined : value;
  })
  @IsOptional()
  @IsString()
  @IsJSON()
  @Expose()
  containerImageCommand: string;

  @Transform(({ value }) => {
    const trimmedValue = value && isString(value) ? value.trim() : value;
    return !trimmedValue || isEmpty(trimmedValue) ? undefined : value;
  })
  @IsOptional()
  @IsString()
  @IsJSON()
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
  @Type(() => AppKubernetesLimitsCreateRequestDto)
  @ValidateNested({ each: true, message: '$property must be an object' })
  @Expose()
  kubernetesLimits: AppKubernetesLimitsCreateRequestDto;

  @IsOptional()
  @Type(() => AppContainerEnvVarCreateRequestDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  envVars: AppContainerEnvVarCreateRequestDto[];
}
