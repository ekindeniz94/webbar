import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { NamespaceStateEnum } from '../../enums';
import { NamespaceServiceDto } from '../namespace-service';
import { NamespaceStageDto } from '../namespace-stage';
import { NamespaceKeypairPublicDto } from './namespace-keypair-public.dto';

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

  fullHostname(stage: NamespaceStageDto): string {
    if (
      this.hostname &&
      this.hostname.length > 0 &&
      this.domain &&
      this.domain?.length > 0 &&
      this.shortId &&
      this.shortId?.length > 0
    ) {
      return `${this.hostname}-${stage.subdomain}-${this.shortId}.${this.domain}`;
    }
    return '__MISSING_DATA__';
  }

  fullHostnameWithProtocol(stage: NamespaceStageDto): string {
    return `https://${this.fullHostname(stage)}`;
  }

  kubernetesName(stage: NamespaceStageDto): string {
    return `${this.name}-${stage.subdomain}-${this.shortId}`;
  }
}
