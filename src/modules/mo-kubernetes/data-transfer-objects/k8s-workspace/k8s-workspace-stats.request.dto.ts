import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { K8sWorkspaceStatsTypeEnum } from '../../enums';

export class K8sWorkspaceStatsRequestDto {
  @IsNotEmpty()
  @IsEnum(K8sWorkspaceStatsTypeEnum)
  @Expose()
  statsType: K8sWorkspaceStatsTypeEnum;

  @IsOptional()
  @IsNumber()
  @Transform(({ value, obj }) => (value ? +value : 5))
  @Expose()
  timeOffsetMinutes?: number;
}
