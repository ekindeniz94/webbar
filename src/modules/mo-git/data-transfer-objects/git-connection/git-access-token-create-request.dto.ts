import { GitConnectionTypeEnum } from '../../enums';

import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GitAccessTokenCreateRequestDto {
  @Expose()
  provider: GitConnectionTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  domain: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  token: string;

  @IsOptional()
  @IsString()
  @Expose()
  namespace_id?: string;
}
