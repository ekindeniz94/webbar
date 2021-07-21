import { Expose, Transform, Type } from 'class-transformer';
import { IsOptional, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { DockerTemplateDto } from '../../../../../mo-core/data-transfer-objects/docker-template.dto';
import { NamespaceServiceCreateRequestDto } from '../../namespace-service-create-request.dto';
import { DTO_VALIDATION_CONST } from '../../../../../mo-core';

export class NamespaceServiceDockerCreateRequestDto extends NamespaceServiceCreateRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MAX)
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MAX
    )
  )
  @Expose()
  dockerfileName: string;

  @IsOptional()
  @Type(() => DockerTemplateDto)
  @Expose()
  template: DockerTemplateDto;
}
