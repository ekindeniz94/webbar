import { Expose, Transform } from 'class-transformer';
import { IsBoolean, IsFQDN, IsString } from 'class-validator';
import { MoUtils, StripTags } from '@mo/js-utils';

export class ProjectNamespaceServiceCnameCreateRequestDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
  @Expose()
  cName: string;

  @IsBoolean()
  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  addToTlsHosts: boolean;
}
