import { Expose } from 'class-transformer';
import { StripTags } from '../../../../utils';

export class RevokeTokenRequestDto {
  @StripTags()
  @Expose()
  accessToken?: string;

  @StripTags()
  @Expose()
  refreshToken?: string;
}
