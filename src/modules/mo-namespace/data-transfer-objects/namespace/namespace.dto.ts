import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { SubscriptionDto } from '../../../mo-subscription-pool';
import { NamespaceStateEnum } from '../../enums';
import { NamespaceServiceDto } from '../namespace-service';
import { NamespaceKeypairDto } from './namespace-keypair.dto';
import { NamespaceStageDto } from '../namespace-stage';

export class NamespaceDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Expose()
  name: string;

  @Type(() => NamespaceKeypairDto)
  @Expose()
  keypair: NamespaceKeypairDto;

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

  @Expose()
  state: NamespaceStateEnum;

  @Expose()
  bgColorStyle: string;

  @Expose()
  subscription: SubscriptionDto;

  @Type(() => NamespaceStageDto)
  @Expose()
  stages: NamespaceStageDto[];

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
    return `${this.hostname}-${this.shortId}`;
  }
}
