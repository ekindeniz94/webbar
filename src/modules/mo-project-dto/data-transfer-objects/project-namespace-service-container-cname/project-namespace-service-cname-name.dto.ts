import { Expose, Transform } from 'class-transformer';
import { MoUtils, StripTags, TransformToBoolean } from '@mo/js-utils';
import { IsBoolean, isBoolean, IsFQDN, IsString } from 'class-validator';

export class ProjectNamespaceServiceCnameNameDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
  @Expose()
  cName: string;

  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
