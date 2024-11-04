import { Expose, plainToInstance, Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../enums';
import { ProjectNamespaceServiceContainerEnvVarDataDto } from './project-namespace-service-container-envvar-data.dto';
import { ProjectNamespaceServiceContainerEnvVarSettingDto } from './project-namespace-service-container-env-var-setting.dto';

export class ProjectNamespaceServiceContainerEnvvarCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(PROJECT_CONST.SERVICE.ENVVAR_NAME.MAX)
  @MinLength(PROJECT_CONST.SERVICE.ENVVAR_NAME.MIN)
  @StripTags()
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
      obj: ProjectNamespaceServiceContainerEnvvarCreateRequestDto;
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
