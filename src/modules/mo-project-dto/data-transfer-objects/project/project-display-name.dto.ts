import { Expose, Transform } from 'class-transformer';
import { IsOptional, isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { TransformToBoolean } from '@mogenius/js-utils';

export class ProjectDisplayNameDto {
  @Expose()
  id: string;

  @TransformToBoolean(false)
  @Expose()
  citt: boolean;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsOptional()
  @Expose()
  description: string;

  @IsOptional()
  @Expose()
  bgColorStyle: string;
}
