// import { Expose, Transform, Type } from 'class-transformer';
// import { isEnum, isString } from 'class-validator';
// import moment from 'moment';
// import { BaseEntityDto } from '@mogenius/database-dto';
// import { IdDto } from '@mogenius/core-dto';
// import { BuildStateEnum, DeploymentStateEnum, K8sNotificationStateEnum } from '../../../mo-product-dto';
//
// export class ProjectNotificationDto extends BaseEntityDto {
//   @Type(() => IdDto)
//   @Expose()
//   project: IdDto;
//
//   @Type(() => IdDto)
//   @Expose()
//   projectNamespace: IdDto;
//
//   @Type(() => IdDto)
//   @Expose()
//   projectNamespaceService: IdDto;
//
//   @Type(() => IdDto)
//   @Expose()
//   projectContainerPod: IdDto;
//
//   @Expose()
//   title: string;
//
//   @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 512))
//   @Expose()
//   message: string | null;
//
//   @Expose()
//   jobId: string;
//
//   @Expose()
//   taskId: string | null;
//
//   @Transform(({ value }) =>
//     value && isEnum(value, K8sNotificationStateEnum) ? value : K8sNotificationStateEnum.PENDING
//   )
//   @Expose()
//   state: K8sNotificationStateEnum;
//
//   @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
//   @Expose()
//   startedAt: Date;
//
//   @Type(() => Number)
//   @Expose()
//   durationMs: number;
//
//   @Expose()
//   commitAuthor: string;
//
//   @Expose()
//   commitMessage: string;
//
//   @Expose()
//   commitHash: string;
//
//   @Transform(({ value }) => {
//     if (value === 'undefined' || value === 'null' || value === 'NULL') {
//       return null;
//     }
//     return value ? `${value}` : value;
//   })
//   @Expose()
//   buildId?: string;
//
//   @Expose()
//   buildState?: BuildStateEnum;
//
//   @Expose()
//   deploymentState?: DeploymentStateEnum;
// }
