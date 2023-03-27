import { GitConnectionTypeEnum } from '../../enums/git-connection-type.enum';
import { Expose, plainToInstance } from 'class-transformer';

/**
 * Project page with branch information.
 *
 * gitlab:    https://gitlab.com/inkscape/inkscape/-/tree/1.2.x
 * github:    https://github.com/andreaseri/eva-vm/tree/master
 * bitbucket: https://bitbucket.org/aerio/public-test/src/develop/
 */
export class RepositoryDto {
  // github:name            bitbucket:name                              gitlab:name|(name_with_namespace)
  // github:clone_url       bitbucket:links:clone:(https:href|ssh:href) gitlab:http_url_to_repo|ssh_url_to_rep
  // github:default_branch; bitbucket:mainbranch:name                   gitlab:default_branch

  @Expose()
  provider: GitConnectionTypeEnum;

  @Expose()
  name: string;

  @Expose()
  clone_url: string;

  @Expose()
  html_url: string;

  @Expose()
  tpl_url: string;

  @Expose()
  default_branch: string | null;

  @Expose()
  full_name: string | null;

  @Expose()
  renderUrl(branch: string): string {
    return this.tpl_url.replace('{html_url}', this.html_url).replace('{branch}', encodeURIComponent(branch));
  }

  @Expose()
  static init(
    provider: GitConnectionTypeEnum,
    name: string,
    clone_url: string,
    html_url: string,
    tpl_url: string,
    default_branch?: string | null,
    full_name?: string | null
  ): RepositoryDto {
    return plainToInstance(
      RepositoryDto,
      {
        provider: provider,
        name: name,
        clone_url: clone_url,
        html_url: html_url,
        tpl_url: tpl_url,
        default_branch: default_branch || null,
        full_name: full_name || null
      },
      { excludeExtraneousValues: true }
    );
  }

  constructor(
    provider: GitConnectionTypeEnum,
    name: string,
    clone_url: string,
    html_url: string,
    tpl_url: string,
    default_branch?: string | null,
    full_name?: string | null
  ) {
    this.provider = provider;
    this.name = name;
    this.clone_url = clone_url;
    this.html_url = html_url;
    this.tpl_url = tpl_url;
    this.default_branch = default_branch || null;
    this.full_name = full_name || null;
  }
}
