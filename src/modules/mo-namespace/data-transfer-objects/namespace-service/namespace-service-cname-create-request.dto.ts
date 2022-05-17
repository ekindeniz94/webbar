import { Expose, Type } from 'class-transformer';
import { IsFQDN, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { StripTags } from '../../../../utils';

export class NamespaceServiceCnameCreateRequestDto extends BaseEntityDto {
  // @Transform(({ value }) => value ?? MoUtils.nanoid())
  @StripTags()
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
  @StripTags()
  @Expose()
  cName: string;

  @IsOptional()
  @Expose()
  cloudflareResponse: any;
}
