import { BitbucketTokenAccessTypeEnum, GitConnectionTypeEnum } from '../../enums';
import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class GitAccessTokenCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(GitConnectionTypeEnum)
  @Expose()
  provider: GitConnectionTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  token: string;

  // ----------------------------------------------------------
  //  ----------------------- Gitlab --------------------------
  // ----------------------------------------------------------
  @ValidateIf((obj: GitAccessTokenCreateRequestDto) => obj.provider === GitConnectionTypeEnum.GIT_LAB)
  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.GIT_LAB ? value : undefined))
  @IsNotEmpty()
  @IsString()
  @Expose()
  domain: string;

  // ----------------------------------------------------------
  //  ----------------------- Bitbucket -----------------------
  // ----------------------------------------------------------
  @ValidateIf((obj: GitAccessTokenCreateRequestDto) => obj.provider === GitConnectionTypeEnum.BITBUCKET)
  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.BITBUCKET ? value : undefined))
  @IsNotEmpty()
  @IsEnum(BitbucketTokenAccessTypeEnum)
  @Expose()
  tokenAccessType: BitbucketTokenAccessTypeEnum;

  @ValidateIf((obj: GitAccessTokenCreateRequestDto) => obj.provider === GitConnectionTypeEnum.BITBUCKET)
  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.BITBUCKET ? value : undefined))
  @IsNotEmpty()
  @IsString()
  @Expose()
  workspace: string;

  @ValidateIf(
    (obj: GitAccessTokenCreateRequestDto) =>
      obj.provider === GitConnectionTypeEnum.BITBUCKET &&
      obj.tokenAccessType === BitbucketTokenAccessTypeEnum.APP_PASSWORD
  )
  @IsNotEmpty()
  @IsString()
  @Expose()
  user: string;
}
