import { Expose } from 'class-transformer';
import { StripTags, TransformToBoolean } from '@mogenius/js-utils';
import { IsBoolean, IsFQDN, IsString } from 'class-validator';

export class ProjectNamespaceServicePortCnameDto {
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
