import { BaseEntityDto } from '@mogenius/database-dto';
import { Expose, Transform, Type } from 'class-transformer';
import { ContainerTypeEnum } from '../../../mo-project-dto/enums/container-type.enum';
import { isArray, isString } from 'class-validator';
import { MoProjectDtoUtils } from '../../../mo-project-dto/mo-project-dto.utils';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';
import { AppPortDto } from '../app-port.dto';
import { ProjectNamespaceServiceContainerKubernetesLimitsDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-container/project-namespace-service-container-kubernetes-limits.dto';
import { AppEnvVarDto } from '../app-envvar.dto';

export class AppContainerDto extends BaseEntityDto {
  @Expose()
  type: ContainerTypeEnum;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

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
  @Expose()
  repositoryLink?: string;

  @Expose()
  repositoryBranch?: string;

  @Transform(({ value }) => (isString(value) ? value : 'Dockerfile'))
  @Expose()
  dockerfileName?: string;

  @Transform(({ value }) => (isString(value) ? value : '.'))
  @Expose()
  dockerContext?: string;

  @Expose()
  repositoryUser?: string;

  @Expose()
  repositoryPAT?: string;
  /************************************************************************************************************
   * type => CONTAINER_IMAGE_TEMPLATE
   ************************************************************************************************************/
  @Expose()
  containerImage: string;

  @Expose()
  containerImageCommand: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      PROJECT_CONST.SERVICE.CONTAINER_IMAGE_COMMAND_ARGS.MAX
    )
  )
  @Expose()
  containerImageCommandArgs: string;

  @Expose()
  containerImageRepoSecret?: string;
  /************************************************************************************************************/

  @Transform(({ value }) => (value === 'null' || value === 'undefined' ? '' : value))
  @Expose()
  setupCommands: string;

  @Type(() => AppPortDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: AppPortDto[];

  @Type(() => ProjectNamespaceServiceContainerKubernetesLimitsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceContainerKubernetesLimitsDto;

  @Type(() => AppEnvVarDto)
  @Expose()
  envVars: AppEnvVarDto[];
}
