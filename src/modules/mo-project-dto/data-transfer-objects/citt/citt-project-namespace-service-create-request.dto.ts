import { IsNotEmpty, isString, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { StripTags } from '@mogenius/js-utils';
import { ServiceControllerEnum } from '../../enums';

export class CittProjectNamespaceServiceCreateRequestDto {
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
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  controller: ServiceControllerEnum;
}
