import { Expose, Transform } from 'class-transformer';
import { isBoolean, IsBoolean, IsFQDN, IsString } from 'class-validator';
import {MoUtils, StripTags, TransformToBoolean} from '@mo/js-utils';

export class ProjectNamespaceServiceCnameCreateRequestDto {
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
