import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceStateEnum } from '../../enums';
import { NamespaceKeypairDto } from './namespace-keypair.dto';

export class NamespaceDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

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

  @Expose()
  services: any[];

  @Expose()
  stages: any[];

  @Expose()
  clusterRegion: string;

  @Expose()
  notifications: any[];

  @IsEnum(NamespaceStateEnum)
  @Expose()
  state: NamespaceStateEnum;

  @Transform(({ value }) => value ?? 'default-icon')
  @Expose()
  icon: string;

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
    return `${this.name}-${this.shortId}`
  }
}
