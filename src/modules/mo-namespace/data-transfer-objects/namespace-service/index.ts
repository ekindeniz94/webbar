import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { NamespaceServiceDockerCreateRequestDto, NamespaceServiceDockerTemplateCreateRequestDto } from './mo-services';
import { NamespaceServiceTypeEnum } from '../../enums';
import { plainToClass } from 'class-transformer';

export * from './mo-services';
export * from './namespace-service.dto';
export * from './namespace-service-create-request.dto';
export * from './namespace-service-envvar.dto';
export * from './namespace-service-envvar-create-request.dto';
export * from './namespace-service-envvar-patch-request.dto';
export * from './namespace-service-group.dto';
export * from './namespace-service-group-create-request.dto';
export * from './namespace-service-group-patch-request.dto';
export * from './namespace-service-kubernetes-settings.dto';
export * from './namespace-service-kubernetes-settings-create-request.dto';
export * from './namespace-service-patch-request.dto';

export type NamespaceServiceCreateTypes =
  | NamespaceServiceCreateRequestDto
  | NamespaceServiceDockerCreateRequestDto
  | NamespaceServiceDockerTemplateCreateRequestDto;

export const plainToClassNamespaceServiceCreate = (
  rawValue: NamespaceServiceCreateTypes
): NamespaceServiceCreateTypes => {
  let data: NamespaceServiceCreateTypes = plainToClass(NamespaceServiceCreateRequestDto, rawValue, {
    excludeExtraneousValues: true
  });

  // DOCKER
  if (data.serviceType === NamespaceServiceTypeEnum.DOCKER) {
    data = plainToClass(NamespaceServiceDockerCreateRequestDto, rawValue, {
      excludeExtraneousValues: true
    });
  }

  // DOCKER_TEMPLATE
  if (data.serviceType === NamespaceServiceTypeEnum.DOCKER_TEMPLATE) {
    data = plainToClass(NamespaceServiceDockerTemplateCreateRequestDto, rawValue, {
      excludeExtraneousValues: true
    });
  }

  return data;
};
