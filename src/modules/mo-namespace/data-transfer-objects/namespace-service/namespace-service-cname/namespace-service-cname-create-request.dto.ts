import { Expose } from 'class-transformer';
import { IsFQDN, IsString } from 'class-validator';
import { StripTags } from '../../../../../utils';

export class NamespaceServiceCnameCreateRequestDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
  @Expose()
  cName: string;
}
