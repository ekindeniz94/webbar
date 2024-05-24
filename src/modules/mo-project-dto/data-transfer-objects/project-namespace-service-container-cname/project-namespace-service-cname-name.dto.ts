import { Expose, Transform } from 'class-transformer';
import { MoUtils, StripTags } from '@mo/js-utils';
import { IsBoolean, isBoolean, IsFQDN, IsString } from 'class-validator';

export class ProjectNamespaceServiceCnameNameDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
  @Expose()
  cName: string;

  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : true))
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
