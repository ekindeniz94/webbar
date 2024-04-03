import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GithubCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

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
  private?: boolean;

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

  @IsOptional()
  @IsString()
  @Expose()
  appId?: string;
}
