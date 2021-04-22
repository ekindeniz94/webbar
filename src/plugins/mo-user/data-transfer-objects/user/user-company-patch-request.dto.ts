import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../utils';

export class UserCompanyPatchRequestDto {
  @ValidateIf((obj: UserCompanyPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Transform(({ value }) => value?.substring(0, 128))
  @Expose()
  name: string;

  @ValidateIf((obj: UserCompanyPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Transform(({ value }) => value?.substring(0, 128))
  @Expose()
  taxNumber: string;
}
