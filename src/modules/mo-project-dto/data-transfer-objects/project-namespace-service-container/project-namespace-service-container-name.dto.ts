import { Expose, Transform } from 'class-transformer';
import { isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { BaseEntityDto } from '@mo/database-dto';
import { ServiceTypeEnum } from '../../enums';

export class ProjectNamespaceServiceContainerNameDto extends BaseEntityDto {
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  type: ServiceTypeEnum;
}
