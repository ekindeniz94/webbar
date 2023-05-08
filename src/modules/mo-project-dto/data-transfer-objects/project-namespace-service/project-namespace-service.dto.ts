import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, isString } from 'class-validator';
import { ProjectNamespaceServiceStateEnum } from '../../../mo-project-dto/enums/project-namespace-service-state.enum';
import { BaseEntityDto } from '@mo/database-dto';
import { ServiceTypeEnum } from '../../enums';
import { UserPublicDto } from '@mo/user-dto';
import { ProjectNamespaceServiceAppDto } from '../project-namespace-service-app';
import { ProjectNamespaceServiceContainerDto } from '../project-namespace-service-container/project-namespace-service-container.dto';
import { IdDto } from '@mo/core-dto';
import { ProjectNamespaceServiceGitSettingsDto } from '../project-namespace-service-git-settings/project-namespace-service-git-settings.dto';
import { CpuDto, EphemeralStorageDto, MemoryDto } from '../stats';

export class ProjectNamespaceServiceDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => IdDto)
  @Expose()
  projectNamespace: IdDto;

  @Expose()
  type: ServiceTypeEnum;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  description: string;

  @Expose()
  state: ProjectNamespaceServiceStateEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;

  @Type(() => ProjectNamespaceServiceAppDto)
  @Expose()
  app: ProjectNamespaceServiceAppDto;

  @Type(() => ProjectNamespaceServiceContainerDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerDto[];

  @Type(() => ProjectNamespaceServiceGitSettingsDto)
  @Expose()
  gitSettings: ProjectNamespaceServiceGitSettingsDto;

  @Type(() => CpuDto)
  @Expose()
  cpu: CpuDto;

  @Type(() => MemoryDto)
  @Expose()
  memory: MemoryDto;

  @Type(() => EphemeralStorageDto)
  @Expose()
  ephemeralStorage: EphemeralStorageDto;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Expose()
  trafficInBytes: number;

  // get tcpPort(): ProjectNamespaceServicePortDto | undefined {
  //   return (
  //     this.ports.find(
  //       (item: ProjectNamespaceServicePortDto) => item.portType === ProjectNamespaceServicePortBindingEnum.TCP
  //     ) ?? undefined
  //   );
  // }
  //
  // get udpPort(): ProjectNamespaceServicePortDto | undefined {
  //   return (
  //     this.ports.find(
  //       (item: ProjectNamespaceServicePortDto) => item.portType === ProjectNamespaceServicePortBindingEnum.UDP
  //     ) ?? undefined
  //   );
  // }
  //
  // get hostname(): string {
  //   return `${this.name.toLowerCase()}`;
  // }
  //
  // get fullHostname(): string {
  //   return `http://${this.name}`;
  // }
  //
  // get fullHostnameWithPort(): string {
  //   return `http://${this.name}:${this.internalPort}`;
  // }
}
