import { IsNotEmpty, IsOptional, isString, IsString } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { StripTags } from '@mo/js-utils';
import { CittProjectNamespaceServiceCreateRequestDto } from './citt-project-namespace-service-create-request.dto';

export class CittProjectNamespaceCreateRequestDto {
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
  name: string;

  @IsOptional()
  @Type(() => CittProjectNamespaceServiceCreateRequestDto)
  @Expose()
  projectNamespaceServices: CittProjectNamespaceServiceCreateRequestDto[];
}
