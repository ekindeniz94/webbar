import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import {
  NamespaceServiceDockerCreateRequestDto,
  NamespaceServiceDockerDto,
  NamespaceServiceDockerTemplateCreateRequestDto,
  NamespaceServiceDockerTemplateDto
} from './mo-services';
import { NamespaceServiceTypeEnum } from '../../enums';
import { plainToClass } from 'class-transformer';
import { NamespaceServiceDto } from './namespace-service.dto';

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
export * from './namespace-service-container-image.dto';

export type NamespaceServiceCreateTypes =
  | NamespaceServiceCreateRequestDto
  | NamespaceServiceDockerCreateRequestDto
  | NamespaceServiceDockerTemplateCreateRequestDto;

export type NamespaceServiceTypes = NamespaceServiceDto | NamespaceServiceDockerDto | NamespaceServiceDockerTemplateDto;

export const plainToClassNamespaceServiceDto = (item: NamespaceServiceTypes): NamespaceServiceTypes => {
  if (item.serviceType === NamespaceServiceTypeEnum.DOCKER) {
    return plainToClass(NamespaceServiceDockerDto, item, { excludeExtraneousValues: true });
  }
  if (item.serviceType === NamespaceServiceTypeEnum.DOCKER_TEMPLATE) {
    return plainToClass(NamespaceServiceDockerTemplateDto, item, { excludeExtraneousValues: true });
  }
  return plainToClass(NamespaceServiceDto, item, { excludeExtraneousValues: true });
};

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
