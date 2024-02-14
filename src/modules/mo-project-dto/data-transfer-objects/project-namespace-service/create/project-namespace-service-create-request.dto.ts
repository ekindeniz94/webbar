import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  isArray,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { StripTags } from '@mo/js-utils';
import { IdDto } from '@mo/core-dto';
import { PROJECT_CONST } from '../../../mo-project-dto.const';
import { ProjectNamespaceServiceContainerCreateRequestDto } from './project-namespace-service-container-create-request.dto';

export class ProjectNamespaceServiceCreateRequestDto {
  @Type(() => IdDto)
  @Expose()
  projectNamespace: IdDto;

  @IsNotEmpty()
  @IsString()
  @MinLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MIN)
  @MaxLength(PROJECT_CONST.SERVICE.DISPLAY_NAME.MAX)
  @Transform(
    ({ value }) =>
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

  @Type(() => ProjectNamespaceServiceContainerCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Expose()
  containers: ProjectNamespaceServiceContainerCreateRequestDto[];

  @IsOptional()
  @Type(() => IdDto)
  // @ValidateNested()
  @Expose()
  app: IdDto;
}
