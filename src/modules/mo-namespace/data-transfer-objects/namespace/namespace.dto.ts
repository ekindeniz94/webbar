import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceKeypairDto } from './namespace-keypair.dto';

export class NamespaceDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MAX)
  @Expose()
  name: string;

  @Type(() => NamespaceKeypairDto)
  @Expose()
  keypair: NamespaceKeypairDto;

  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  users: string[];

  @IsNotEmpty()
  @Expose()
  hostname: string;

  @IsNotEmpty()
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

  @Expose()
  state: string; // state enum erstellen?
}
