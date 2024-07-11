import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';
import { GitConnectionTypeEnum } from '../../enums';
import { MoGitDtoUtils } from '../../mo-git-dto.utils';

export class GitCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(GitConnectionTypeEnum)
  @Expose()
  provider: GitConnectionTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  appId?: string;

  // ----------------------------------------------------------
  //  ----------------------- Github --------------------------
  // ----------------------------------------------------------
  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.GIT_HUB ? value : undefined))
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.GIT_HUB)
  @Type(() => Boolean)
  @IsBoolean()
  @Expose()
  private?: boolean;

  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.GIT_HUB ? value : undefined))
  @Transform(() => false)
  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  auto_init?: boolean;

  // ----------------------------------------------------------
  //  ----------------------- Gitlab --------------------------
  // ----------------------------------------------------------
  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.GIT_LAB ? value : undefined))
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.GIT_LAB)
  @IsNumber()
  @Expose()
  namespace_id?: number;

  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.GIT_LAB ? value : undefined))
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.GIT_LAB)
  @IsNotEmpty()
  @IsString()
  @Expose()
  visibility: string;
  /************************************/

  // ----------------------------------------------------------
  //  ----------------------- Bitbucket -----------------------
  // ----------------------------------------------------------
  @Transform(({ value, obj }) =>
    obj.provider === GitConnectionTypeEnum.BITBUCKET ? MoGitDtoUtils.generateSlug(obj?.name) : undefined
  )
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.BITBUCKET)
  @IsOptional()
  @IsString()
  @Expose()
  slug?: string;

  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.BITBUCKET ? value : undefined))
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.BITBUCKET)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  is_private: boolean;

  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.BITBUCKET ? value : undefined))
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.BITBUCKET)
  @IsOptional()
  @IsString()
  @Expose()
  workspace?: string;

  @Transform(({ value, obj }) => (obj.provider === GitConnectionTypeEnum.BITBUCKET ? value : undefined))
  @ValidateIf((object, value) => object.provider === GitConnectionTypeEnum.BITBUCKET)
  @IsOptional()
  @IsString()
  @Expose()
  project?: string;

  // -----------------------------------------------------------------------
  //  ----------------------- ADDITIONAL INFORMATION -----------------------
  // -----------------------------------------------------------------------

  // @IsOptional()
  // @IsString()
  // @Expose()
  // description?: string;
  //
  // @IsOptional()
  // @IsString()
  // @Expose()
  // homepage?: string;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // has_issues?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // has_projects?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // has_wiki?: boolean;
  //
  // @Type(() => Number)
  // @IsOptional()
  // @IsNumber()
  // @Expose()
  // team_id?: number;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // auto_init?: boolean;
  //
  // @IsOptional()
  // @IsString()
  // @Expose()
  // gitignore_template?: string;
  //
  // @IsOptional()
  // @IsString()
  // @Expose()
  // license_template?: string;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // allow_squash_merge?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // allow_merge_commit?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // allow_rebase_merge?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // allow_auto_merge?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // delete_branch_on_merge?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // has_downloads?: boolean;
  //
  // @Type(() => Boolean)
  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // is_template?: boolean;
}
