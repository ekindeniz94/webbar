// import { Expose, Transform } from 'class-transformer';
// import { ServiceControllerEnum } from '../../../../mo-project-dto';
//
// export class K8sImportResourceServiceListItemDto {
//   @Transform(({ value, obj }) => value ?? obj?.metadata?.uid, { toClassOnly: true })
//   @Expose()
//   id: string;
//
//   @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
//   @Expose()
//   displayName: string;
//
//   @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
//   @Expose()
//   controllerName: string;
//
//   @Expose()
//   controller: ServiceControllerEnum;
// }
