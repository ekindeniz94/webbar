import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, isString, IsString, MaxLength, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../utils';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class UserCompanyPatchRequestDto {
  @ValidateIf((obj: UserCompanyPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.COMPANY.NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.COMPANY.NAME.MAX)
  )
  @Expose()
  name: string;

  @ValidateIf((obj: UserCompanyPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.COMPANY.TAX_NUMBER.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.COMPANY.TAX_NUMBER.MAX)
  )
  @Expose()
  taxNumber: string;
}
