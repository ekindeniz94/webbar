import { Expose } from 'class-transformer';
import { TransformToBoolean } from '@mo/js-utils';

export class BitbucketWorkspaceResponseDto {
  @Expose()
  type: string;

  @Expose()
  created_on: string;

  @Expose()
  uuid: string;

  @Expose()
  name: number;

  @Expose()
  slug: number;

  @TransformToBoolean(true)
  @Expose()
  is_private: boolean;

  @Expose()
  links: { [key: string]: { href: string } };
}
