import { Expose, Transform, Type } from 'class-transformer';
import { isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { BaseEntityDto } from '@mo/database-dto';
import { ContainerTypeEnum } from '../../enums';
import { CpuDto, EphemeralStorageDto, MemoryDto } from '../stats';

export class ProjectNamespaceServiceContainerOverviewDto extends BaseEntityDto {
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @Expose()
  type: ContainerTypeEnum;

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
}
