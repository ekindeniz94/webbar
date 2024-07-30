import { Expose } from 'class-transformer';
import { IsBoolean, IsFQDN, IsString } from 'class-validator';
import { StripTags, TransformToBoolean } from '@mogenius/js-utils';

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
