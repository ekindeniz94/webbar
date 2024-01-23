import {Expose, Transform, Type} from 'class-transformer';
import {isArray, isBoolean, isIP} from 'class-validator';
import _ from 'lodash';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum, ClusterTypeEnum } from '../../enums';
import {MoUtils} from "@mo/js-utils";

export class ClusterPublicDto {
  @Expose()
  id: string;

  @Expose()
  region: string;

  @Expose()
  displayName: string;

  @Transform(({ value }) => value ?? ClusterTypeEnum.BRING_YOUR_OWN)
  @Expose()
  type: ClusterTypeEnum;

  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;

  @Transform(({ value }) => value ?? ClusterBuildServerTypeEnum.MO_AZURE)
  @Expose()
  buildServerType: ClusterBuildServerTypeEnum;

  @Expose()
  icon: string;

  @Expose()
  image: string;

  // @Expose()
  // host: string;

  // @Expose()
  // spectrumSubDomain: string;

  @Expose()
  loadbalancerHost: string;

  @Expose()
  description: string;

  @Transform(({ value }) => (isBoolean(value) ? MoUtils.parseBoolean(value) : false))
  @Expose()
  cloudflareProxied: boolean;

  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @Expose()
  loadbalancerIps: string[];

  // get spectrumHost(): string {
  //   return `${this.spectrumSubDomain}-${this.name}`;
  // }
}
