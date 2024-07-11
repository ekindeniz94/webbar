import { Expose, Type } from 'class-transformer';
import { TransformToBoolean } from '@mo/js-utils';
import { BitbucketWorkspaceResponseDto } from './bitbucket-workspace-response.dto';

export class BitbucketProjectResponseDto {
  @Expose()
  type: string;

  @Expose()
  created_on: string;

  @Expose()
  uuid: string;

  @Expose()
  name: number;

  @Expose()
  key: number;

  @TransformToBoolean(true)
  @Expose()
  is_private: boolean;

  @Expose()
  links: { [key: string]: { href: string } };

  @Type(() => BitbucketWorkspaceResponseDto)
  @Expose()
  workspace: BitbucketWorkspaceResponseDto;
}
