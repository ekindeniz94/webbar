import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { GitConnectionDto } from '../../../mo-git';
import { ClusterPublicDto, SubscriptionDto } from '../../../mo-payment';
import { NamespaceStateEnum } from '../../enums';

export class NamespaceDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  name: string;

  // @Type(() => NamespaceKeypairDto)
  // @Expose()
  // keypair: NamespaceKeypairDto;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  users: string[];

  @Expose()
  hostname: string;

  @Expose()
  domain: string;

  @Expose()
  description: string;

  @Expose()
  state: NamespaceStateEnum;

  @Expose()
  bgColorStyle: string;

  @Type(() => SubscriptionDto)
  @Expose()
  subscription: SubscriptionDto;

  @Type(() => GitConnectionDto)
  @Expose()
  gitConnection: GitConnectionDto;

  @Type(() => ClusterPublicDto)
  @Expose()
  cluster: ClusterPublicDto;
}
