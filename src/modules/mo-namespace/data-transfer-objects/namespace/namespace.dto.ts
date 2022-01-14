import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceStateEnum } from '../../enums';
import { NamespaceServiceDto } from '../namespace-service';
import { NamespaceKeypairDto } from './namespace-keypair.dto';
import { GitConnectionDto } from '../../../mo-git';
import { isString } from 'class-validator';
import { SubscriptionDto } from '../../../mo-payment';

export class NamespaceDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

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

  // @Type(() => NamespaceStageDto)
  // @Expose()
  // stages: NamespaceStageDto[];

  @Type(() => GitConnectionDto)
  @Expose()
  gitConnection: GitConnectionDto;
}
