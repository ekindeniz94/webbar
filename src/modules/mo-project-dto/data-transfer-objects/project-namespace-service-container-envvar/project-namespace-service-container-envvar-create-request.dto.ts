import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { StripTags } from '@mogenius/js-utils';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../enums';
import { ProjectNamespaceServiceContainerEnvVarDataDto } from './project-namespace-service-container-envvar-data.dto';

export class ProjectNamespaceServiceContainerEnvvarCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  // @Matches(PROJECT_CONST.SERVICE.ENVVAR_NAME.MATCHES)
  @MaxLength(PROJECT_CONST.SERVICE.ENVVAR_NAME.MAX)
  @MinLength(PROJECT_CONST.SERVICE.ENVVAR_NAME.MIN)
  @StripTags()
  @Expose()
  name: string;

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

  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === undefined ? false : value))
  @Expose()
  deactivateName: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => (value === undefined ? false : value))
  @Expose()
  deactivateValue: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  @Transform(({ value }) => (value === undefined ? false : value))
  deactivateType: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  @Transform(({ value }) => (value === undefined ? false : value))
  deactivateDelete: boolean;

  // @IsOptional()
  // @IsString()
  // @StripTags()
  // @Expose()
  // dependsOn?: string;
  //
  // @IsOptional()
  // @IsString()
  // @StripTags()
  // @Expose()
  // dependsOnMethod?: string;
}
