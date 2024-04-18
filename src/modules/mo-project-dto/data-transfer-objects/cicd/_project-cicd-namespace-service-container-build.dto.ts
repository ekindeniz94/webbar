// import { Expose, Transform } from 'class-transformer';
// import { BuildStateEnum } from '../../../mo-product-dto';
// import moment from 'moment';
// import { ProjectCiCdNamespaceServiceBuildTaskDto } from './project-cicd-namespace-service-build-task.dto';
//
// export class ProjectCiCdNamespaceServiceContainerBuildDto {
//   @Expose()
//   projectId: string;
//
//   @Expose()
//   namespace: string;
//
//   @Expose()
//   controller: string;
//
//   @Expose()
//   container: string;
//
//   @Expose()
//   startTime: Date;
//
//   @Expose()
//   finishTime: Date;
//
//   @Expose()
//   buildId: string;
//
//   @Expose()
//   buildState: BuildStateEnum;
//
//   @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
//   @Expose()
//   createdAt: Date;
//
//   @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
//   @Expose()
//   updatedAt: Date;
//
//   @Expose()
//   commitHash: string;
//
//   @Expose()
//   commitLink: string;
//
//   @Expose()
//   commitAuthor: string;
//
//   @Expose()
//   commitMessage: string;
//
//   @Expose()
//   durationMs: number;
//
//   @Expose()
//   tasks: ProjectCiCdNamespaceServiceBuildTaskDto[] | null;
// }
