import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../../mo-core';

export class DocuMiscDataCreateRequest {
  // Section Title
  @MinLength(DTO_VALIDATION_CONST.MISC.DOCU.ENTRY.TITLE.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCU.ENTRY.TITLE.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.DOCU.ENTRY.TITLE.MAX)
  )
  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  // Section Content
  @MinLength(DTO_VALIDATION_CONST.MISC.DOCU.ENTRY.CONTENT.MIN)
  @MaxLength(DTO_VALIDATION_CONST.MISC.DOCU.ENTRY.CONTENT.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.MISC.DOCU.ENTRY.TITLE.MAX)
  )
  @IsNotEmpty()
  @IsString()
  content: string;
}
