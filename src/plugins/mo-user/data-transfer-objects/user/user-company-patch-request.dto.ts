import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../utils';

export class UserCompanyPatchRequestDto {
  @ValidateIf((obj: UserCompanyPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @ValidateIf((obj: UserCompanyPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserCompanyPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @Expose()
  taxNumber: string;
}
