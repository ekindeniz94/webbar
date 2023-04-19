import { Expose } from 'class-transformer';
import { IsFQDN, IsString } from 'class-validator';
import { StripTags } from '@mo/js-utils';

export class ProjectNamespaceServiceCnameCreateRequestDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
  @Expose()
  cName: string;
}
