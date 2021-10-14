
// export * from './mo-services';
export * from './namespace-service-container-image.dto';
export * from './namespace-service-create-request.dto';
export * from './namespace-service-docker-k8s-patch-request.dto';
export * from './namespace-service-envvar-create-request.dto';
export * from './namespace-service-envvar-patch-request.dto';
export * from './namespace-service-envvar.dto';
export * from './namespace-service-kubernetes-settings-create-request.dto';
export * from './namespace-service-kubernetes-settings.dto';
export * from './namespace-service-patch-request.dto';
export * from './namespace-service.dto';


// export type NamespaceServiceCreateTypes =
//   | NamespaceServiceCreateRequestDto
//   | NamespaceServiceDockerCreateRequestDto
//   | NamespaceServiceDockerTemplateCreateRequestDto;

// export type NamespaceServiceTypes = NamespaceServiceDto | NamespaceServiceDockerDto | NamespaceServiceDockerTemplateDto;

// export const plainToClassNamespaceServiceDto = (item: NamespaceServiceTypes): NamespaceServiceTypes => {
//   if (item.serviceType === ServiceTypeEnum.DOCKER) {
//     return plainToClass(NamespaceServiceDockerDto, item, { excludeExtraneousValues: true });
//   }
//   if (item.serviceType === ServiceTypeEnum.DOCKER_TEMPLATE) {
//     return plainToClass(NamespaceServiceDockerTemplateDto, item, { excludeExtraneousValues: true });
//   }
//   return plainToClass(NamespaceServiceDto, item, { excludeExtraneousValues: true });
// };

// export const plainToClassNamespaceServiceCreate = (
//   rawValue: NamespaceServiceCreateTypes
// ): NamespaceServiceCreateTypes => {
//   let data: NamespaceServiceCreateTypes = plainToClass(NamespaceServiceCreateRequestDto, rawValue, {
//     excludeExtraneousValues: true
//   });
//
//   // DOCKER
//   if (data.serviceType === ServiceTypeEnum.DOCKER) {
//     data = plainToClass(NamespaceServiceDockerCreateRequestDto, rawValue, {
//       excludeExtraneousValues: true
//     });
//   }
//
//   // DOCKER_TEMPLATE
//   if (data.serviceType === ServiceTypeEnum.DOCKER_TEMPLATE) {
//     data = plainToClass(NamespaceServiceDockerTemplateCreateRequestDto, rawValue, {
//       excludeExtraneousValues: true
//     });
//   }
//
//   return data;
// };
