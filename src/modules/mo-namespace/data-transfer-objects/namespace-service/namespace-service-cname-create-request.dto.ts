import {Expose, Transform, Type} from 'class-transformer';
import { IsFQDN, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import {MoUtils} from "../../../../utils";

export class NamespaceServiceCnameCreateRequestDto extends BaseEntityDto {
  @Transform((value) => value ?? MoUtils.nanoid())
  @Expose()
  id: string;

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
