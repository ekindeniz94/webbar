import { Expose, Type } from 'class-transformer';
import { IsFQDN, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceServiceCnameCreateRequestDto extends BaseEntityDto {
  // @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Expose()
  internalPort: number;

  @IsNotEmpty()
  @IsFQDN({})
  @Expose()
  cName: string;

  @IsOptional()
  @Expose()
  cloudflareResponse: any;
}
