import { Expose } from 'class-transformer';

export class GithubRepositoryDto {
  @Expose()
  id: number;

  // branch name
  @Expose()
  name: string;

  @Expose()
  clone_url: string;

  @Expose()
  full_name: string;

  @Expose()
  created_at: string;

  @Expose()
  default_branch: string;

  @Expose()
  language: string;

  // {admin: true, maintain: true, push: true, triage: true, pull: true}
  @Expose()
  permissions: any;

  @Expose()
  size: number;

  @Expose()
  visibility: string;

  get branchesApiUrl(): string {
    return `https://api.github.com/repos/${this.full_name}/branches`;
  }
}
