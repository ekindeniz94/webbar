import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { NamespaceStateEnum } from '../../enums';
import { NamespaceServiceDto } from '../namespace-service';
import { NamespaceStageDto } from '../namespace-stage';
import { NamespaceKeypairPublicDto } from './namespace-keypair-public.dto';
import { GitConnectionDto } from '../git-connection';

export class NamespacePublicDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  name: string;

  @Type(() => NamespaceKeypairPublicDto)
  @Expose()
  keypair: NamespaceKeypairPublicDto;

  @Expose()
  users: string[];

  @Expose()
  hostname: string;

  @Expose()
  domain: string;

  @Expose()
  description: string;

  @Type(() => NamespaceServiceDto)
  @Expose()
  services: NamespaceServiceDto[];

  @Type(() => NamespaceStageDto)
  @Expose()
  stages: NamespaceStageDto[];

  @Expose()
  state: NamespaceStateEnum;

  @Expose()
  bgColorStyle: string;

  @Expose()
  subscription: SubscriptionDto;

  @Type(() => GitConnectionDto)
  @Expose()
  gitConnection: GitConnectionDto;
}
