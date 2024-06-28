import { GitConnectionTypeEnum } from '../../enums';

import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class GitAccessTokenCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(GitConnectionTypeEnum)
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

  // @IsOptional()
  // @IsString()
  // @Expose()
  // namespace_id?: string;
}
