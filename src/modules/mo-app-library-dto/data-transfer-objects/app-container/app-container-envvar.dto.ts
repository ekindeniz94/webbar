import { ProjectNamespaceServiceContainerEnvVarDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-container-envvar/project-namespace-service-container-envvar.dto';
import { Expose, plainToInstance, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../../mo-project-dto/enums/project-namespace-service-envvar-type.enum';
import { AppContainerEnvVarDataDto } from './app-container-envvar-data.dto';
import { ProjectNamespaceServiceContainerEnvVarSettingDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-container-envvar/project-namespace-service-container-env-var-setting.dto';

export class AppContainerEnvVarDto extends BaseEntityDto implements ProjectNamespaceServiceContainerEnvVarDto {
  // TODO REMOEV AFTER MIGRATION
  @Expose()
  valueTemp: any;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_NAME.MATCHES)
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;

  @IsNotEmpty()
  @Transform(({ value, obj }: { value: AppContainerEnvVarDataDto; obj: AppContainerEnvVarDto }) => {
    return plainToInstance(
      AppContainerEnvVarDataDto,
      {
        ...value,
        type: obj.type
      },
      { excludeExtraneousValues: true }
    );
  })
  @IsObject({ message: '$property must be an object' })
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  data: AppContainerEnvVarDataDto;

  @IsOptional()
  @Transform(({ value, obj }: { value: ProjectNamespaceServiceContainerEnvVarSettingDto; obj: any }) => {
    // TODO REMOVE AFTER MIGRATION
    return plainToInstance(
      ProjectNamespaceServiceContainerEnvVarSettingDto,
      {
        deactivateName: value?.deactivateName ? value.deactivateName : obj.deactivateName,
        deactivateValue: value?.deactivateValue ? value.deactivateValue : obj.deactivateName,
        deactivateType: value?.deactivateType ? value.deactivateType : obj.deactivateType,
        deactivateDelete: value?.deactivateDelete ? value.deactivateDelete : obj.deactivateDelete
      },
      { excludeExtraneousValues: true }
    );
  })
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  settings: ProjectNamespaceServiceContainerEnvVarSettingDto;
}
