import { Expose, plainToInstance, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { BaseEntityDto } from '@mogenius/database-dto';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../enums';
import { ProjectNamespaceServiceContainerEnvVarDataDto } from './project-namespace-service-container-envvar-data.dto';
import { ProjectNamespaceServiceContainerEnvVarSettingDto } from './project-namespace-service-container-env-var-setting.dto';

export class ProjectNamespaceServiceContainerEnvVarDto extends BaseEntityDto {
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
  @Transform(
    ({
      value,
      obj
    }: {
      value: ProjectNamespaceServiceContainerEnvVarDataDto;
      obj: ProjectNamespaceServiceContainerEnvVarDto;
    }) => {
      return plainToInstance(
        ProjectNamespaceServiceContainerEnvVarDataDto,
        {
          ...value,
          type: obj.type
        },
        { excludeExtraneousValues: true }
      );
    }
  )
  @IsObject({ message: '$property must be an object' })
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  data: ProjectNamespaceServiceContainerEnvVarDataDto;

  @IsOptional()
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  settings: ProjectNamespaceServiceContainerEnvVarSettingDto;
}
