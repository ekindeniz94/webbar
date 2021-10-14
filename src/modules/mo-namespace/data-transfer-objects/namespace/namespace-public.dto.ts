import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceStateEnum } from '../../enums';
import { NamespaceServiceDto } from '../namespace-service';
import { NamespaceKeypairPublicDto } from './namespace-keypair-public.dto';
import { NamespaceStageEntityDto } from './namespace-stage.dto';
import { SubscriptionDto } from '../../../mo-subscription-pool';

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

  @Type(() => NamespaceStageEntityDto)
  @Expose()
  stages: NamespaceStageEntityDto[];

  @Expose()
  state: NamespaceStateEnum;

  @Expose()
  bgColorStyle: string;

  @Expose()
  subscription: SubscriptionDto;

  get fullHostname(): string {
    if (
      this.hostname &&
      this.hostname.length > 0 &&
      this.domain &&
      this.domain?.length > 0 &&
      this.shortId &&
      this.shortId?.length > 0
    ) {
      return `${this.hostname}-${this.shortId}.${this.domain}`;
    }
    return '__MISSING_DATA__';
  }

  get fullHostnameWithProtocol(): string {
    return `https://${this.fullHostname}`;
  }

  get kubernetesName(): string {
    return `${this.name}-${this.shortId}`;
  }
}
