import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';
import { GitConnectionTypeEnum } from '../../enums';

export class GitCreateRequestDto {
  //   This is only to choose which validators to use based on the connection type
  @IsNotEmpty()
  @Expose()
  connectionType: GitConnectionTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  // Check if the connection type is GitLab, if so, handle the namespace_id, if not, ignore it and remove possible values
  @Transform(({ value, obj }) => {
    if (obj.connectionType === GitConnectionTypeEnum.GIT_LAB) {
      return value;
    } else {
      return undefined;
    }
  })
  @ValidateIf((object, value) => object.connectionType === GitConnectionTypeEnum.GIT_LAB)
  @IsNumber()
  @Expose()
  namespace_id?: number;

  @Transform(({ value, obj }) => {
    if (obj.connectionType === GitConnectionTypeEnum.GIT_HUB) {
      return value;
    } else {
      return undefined;
    }
  })
  @ValidateIf((object, value) => object.connectionType === GitConnectionTypeEnum.GIT_HUB)
  @Type(() => Boolean)
  @IsBoolean()
  @Expose()
  private?: boolean;

  @Transform(({ value, obj }) => {
    if (obj.connectionType === GitConnectionTypeEnum.GIT_LAB) {
      return value;
    } else {
      return undefined;
    }
  })
  @ValidateIf((object, value) => object.connectionType === GitConnectionTypeEnum.GIT_LAB)
  @IsNotEmpty()
  @IsString()
  @Expose()
  visibility: string;

  @IsOptional()
  @IsString()
  @Expose()
  appId?: string;

  // -----------------------------------------------------------------------
  //  ----------------------- ADDITIONAL INFORMATION -----------------------
  // -----------------------------------------------------------------------

  @IsOptional()
  @IsString()
  @Expose()
  description?: string;

  @IsOptional()
  @IsString()
  @Expose()
  homepage?: string;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  has_issues?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  has_projects?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  has_wiki?: boolean;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  team_id?: number;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  auto_init?: boolean;

  @IsOptional()
  @IsString()
  @Expose()
  gitignore_template?: string;

  @IsOptional()
  @IsString()
  @Expose()
  license_template?: string;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_squash_merge?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_merge_commit?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_rebase_merge?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_auto_merge?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  delete_branch_on_merge?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  has_downloads?: boolean;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  is_template?: boolean;
}
