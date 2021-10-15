import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceDto } from '../namespace';
import { NamespaceServiceDto } from '../namespace-service';

export class NamespaceStageDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  subdomain: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  description: string;

  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => NamespaceServiceDto)
  @Expose()
  services: NamespaceServiceDto[];
}
