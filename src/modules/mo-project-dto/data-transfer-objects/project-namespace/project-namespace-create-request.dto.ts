import { Expose, Transform } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';
import { IsNotEmpty, IsOptional, IsString, isString } from 'class-validator';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { StripTags } from '@mogenius/js-utils';

export class ProjectNamespaceCreateRequestDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.STAGE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Transform(({ value, obj }) =>
    value
      ? MoProjectDtoUtils.k8sName(value, PROJECT_CONST.STAGE.NAME.MAX)
      : MoProjectDtoUtils.k8sName(obj.displayName, PROJECT_CONST.STAGE.NAME.MAX)
  )
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.STAGE.DESCRIPTION.MAX)
  )
  @Expose()
  description: string;
}
