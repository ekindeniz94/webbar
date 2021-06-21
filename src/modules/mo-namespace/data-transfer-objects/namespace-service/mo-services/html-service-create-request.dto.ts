import { Expose, Transform } from 'class-transformer';
import {
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { NamespaceServiceCreateRequestDto } from '..';
import { DTO_VALIDATION_CONST } from '../../../..';

export class NamespaceServiceHtmlCreateRequestDto extends NamespaceServiceCreateRequestDto {
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
  documentRoot: string;
}
