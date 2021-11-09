import { Expose } from 'class-transformer';
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

  @IsOptional()
  @IsBoolean()
  @Expose()
  private?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  has_issues?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  has_projects?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  has_wiki?: boolean;

  @IsOptional()
  @IsNumber()
  @Expose()
  team_id?: number;

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

  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_squash_merge?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_merge_commit?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_rebase_merge?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  allow_auto_merge?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  delete_branch_on_merge?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  has_downloads?: boolean;

  @IsOptional()
  @IsBoolean()
  @Expose()
  is_template?: boolean;
}
