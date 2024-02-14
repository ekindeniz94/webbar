import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, isString } from 'class-validator';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import { KubernetesPublicEventDto } from '../../../mo-kubernetes/data-transfer-objects/kubernetes-public-event.dto';
import { ProjectNamespaceServiceCreateRequestDto } from './create/project-namespace-service-create-request.dto';
import { ProjectNamespaceServiceStateEnum } from '../../../mo-project-dto/enums/project-namespace-service-state.enum';
import { PROJECT_CONST } from '../../../mo-project-dto/mo-project-dto.const';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceFlatDto extends BaseEntityDto {
  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  description: string;

  @Expose()
  state: ProjectNamespaceServiceStateEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  switchedOn: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => KubernetesPublicEventDto)
  @Expose()
  messages: KubernetesPublicEventDto[];
}
