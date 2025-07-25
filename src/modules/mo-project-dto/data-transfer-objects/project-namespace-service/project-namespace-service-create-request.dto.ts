import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  isArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { IdRequiredDto } from '@mogenius/core-dto';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceContainerCreateRequestDto } from '../project-namespace-service-container/project-namespace-service-container-create-request.dto';
import { ServiceControllerEnum } from '../../enums';
import { CronjobSettingsDto } from './cronjob-settings.dto';
import { HpaSettingsDto } from './hpa';

export class ProjectNamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @Type(() => IdRequiredDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  projectNamespace: IdRequiredDto;

  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controller: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  )
  @StripTags()
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  description: string;

  @IsNotEmpty()
  @Type(() => ProjectNamespaceServiceContainerCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsArray()
  @ValidateNested({ each: true, message: '$property must be an array' })
  @ArrayMinSize(1)
  @Expose()
  containers: ProjectNamespaceServiceContainerCreateRequestDto[];

  @Transform(({ value, obj }) =>
    obj.controller === ServiceControllerEnum.CRON_JOB ? plainToInstance(CronjobSettingsDto, value) : undefined
  )
  @ValidateIf((obj: ProjectNamespaceServiceCreateRequestDto) => obj.controller === ServiceControllerEnum.CRON_JOB)
  @IsNotEmpty()
  @Type(() => CronjobSettingsDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  cronJobSettings: CronjobSettingsDto;

  @Transform(({ value, obj }) =>
    obj.controller === ServiceControllerEnum.DEPLOYMENT && !!obj.hpaSettings
      ? plainToInstance(HpaSettingsDto, value)
      : undefined
  )
  @ValidateIf(
    (obj: ProjectNamespaceServiceCreateRequestDto) =>
      obj.controller === ServiceControllerEnum.DEPLOYMENT && !!obj.hpaSettings
  )
  @IsNotEmpty()
  @Type(() => HpaSettingsDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  hpaSettings: HpaSettingsDto;

  @IsOptional()
  // TODO app multi container
  // @ValidateIf((obj: ProjectNamespaceServiceCreateRequestDto) =>
  //   obj?.containers?.some((container) => isServiceTemplateType(container.type))
  // )
  @Type(() => IdRequiredDto)
  @ValidateNested()
  @Expose()
  app: IdRequiredDto;
}
