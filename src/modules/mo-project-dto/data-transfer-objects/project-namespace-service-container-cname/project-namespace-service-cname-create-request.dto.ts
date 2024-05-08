import { Expose, Transform } from 'class-transformer';
import { isBoolean, IsBoolean, IsFQDN, IsString } from 'class-validator';
import { MoUtils, StripTags } from '@mo/js-utils';

export class ProjectNamespaceServiceCnameCreateRequestDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
  @Expose()
  cName: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
