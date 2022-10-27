import { NamespaceStageDto } from './namespace-stage';
import { K8sNotificationStateEnum, NamespaceNotificationDto } from '../../mo-notification';
import { Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';

export class DashboardStageNotificationDto {
  @Type(() => Number)
  @Expose()
  stage: NamespaceStageDto;

  @Type(() => NamespaceNotificationDto)
  @Expose()
  notifications: NamespaceNotificationDto[];

  @IsOptional()
  @IsEnum(K8sNotificationStateEnum)
  @Expose()
  state: K8sNotificationStateEnum | null;
}
