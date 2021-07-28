import { Expose, Transform, Type } from 'class-transformer';
import {
  IsNotEmptyObject,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { NamespaceServiceDockerCreateRequestDto } from '../docker';
import { DockerTemplateDto, DTO_VALIDATION_CONST } from '../../../../../mo-core';
import { TransformFnParams } from 'class-transformer/types/interfaces';

export class NamespaceServiceDockerTemplateCreateRequestDto extends NamespaceServiceDockerCreateRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX
    )
  )
  @Expose()
  gitRepository: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.SERVICE.BRANCH_NAME.MIN)
  @Transform((params: TransformFnParams) => NamespaceServiceDockerCreateRequestDto.gitBranchTransform(params))
  @Expose()
  gitBranch: string;

  @IsNotEmptyObject()
  @Type(() => DockerTemplateDto)
  @ValidateNested()
  @Expose()
  template: DockerTemplateDto;
}
