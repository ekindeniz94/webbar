import { GitConnectionTypeEnum } from '../../enums/git-connection-type.enum';
import { Expose, Transform, Type } from 'class-transformer';

/**
 * Project page with branch information.
 *
 * gitlab:    https://gitlab.com/inkscape/inkscape/-/tree/1.2.x
 * github:    https://github.com/andreaseri/eva-vm/tree/master
 * bitbucket: https://bitbucket.org/aerio/public-test/src/develop/
 */
export class GitRepositoryDto {
  // github:name            bitbucket:name                              gitlab:name|(name_with_namespace)
  // github:clone_url       bitbucket:links:clone:(https:href|ssh:href) gitlab:http_url_to_repo|ssh_url_to_rep
  // github:default_branch; bitbucket:mainbranch:name                   gitlab:default_branch

  // @Type(() => Number)
  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return obj.uuid;
    return obj.id;
  })
  @Expose()
  id: number;

  @Transform(({ value }) => value ?? GitConnectionTypeEnum.GIT_LAB)
  @Expose()
  provider: GitConnectionTypeEnum;

  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.GIT_LAB) return obj.name;
    if (obj.provider === GitConnectionTypeEnum.GIT_HUB) return obj.name;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return obj.name;
    return obj.name;
  })
  @Expose()
  name: string;

  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.GIT_LAB) return obj.name_with_namespace;
    if (obj.provider === GitConnectionTypeEnum.GIT_HUB) return obj.full_name;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return obj.full_name;
    return obj.full_name || obj.name_with_namespace;
  })
  @Expose()
  full_name: string | null;

  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.GIT_LAB) return obj.http_url_to_repo ?? obj.git_http_url;
    if (obj.provider === GitConnectionTypeEnum.GIT_HUB) return obj.clone_url;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return `${obj?.links?.html?.href}.git`;
    return obj.clone_url || obj.http_url_to_repo;
  })
  @Expose()
  clone_url: string;

  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.GIT_LAB) return obj.web_url;
    if (obj.provider === GitConnectionTypeEnum.GIT_HUB) return obj.html_url;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return obj?.links?.html?.href;
    return obj.html_url || obj.web_url;
  })
  @Expose()
  html_url: string;

  // @Transform(({ value, obj }) => value ?? '{html_url}/-/tree/{branch}')
  // @Expose()
  // tpl_url: string;
  //

  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.GIT_LAB) return obj.default_branch;
    if (obj.provider === GitConnectionTypeEnum.GIT_HUB) return obj.default_branch;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return obj.mainbranch?.name;
    return obj.default_branch;
  })
  @Expose()
  default_branch: string | null;

  @Transform(({ value, obj }) => {
    if (value) return value;
    if (obj.provider === GitConnectionTypeEnum.GIT_LAB) return obj.visibility;
    if (obj.provider === GitConnectionTypeEnum.GIT_HUB) return obj.visibility;
    if (obj.provider === GitConnectionTypeEnum.BITBUCKET) return obj.is_private ? 'private' : 'public';
    return obj.visibility;
  })
  @Expose()
  visibility: string;

  //
  // @Expose()
  // renderUrl(branch: string): string {
  //   return this.tpl_url.replace('{html_url}', this.html_url).replace('{branch}', encodeURIComponent(branch));
  // }

  // @Expose()
  // static init(
  //   provider: GitConnectionTypeEnum,
  //   name: string,
  //   clone_url: string,
  //   html_url: string,
  //   tpl_url: string,
  //   default_branch?: string | null,
  //   full_name?: string | null
  // ): RepositoryDto {
  //   return plainToInstance(
  //     RepositoryDto,
  //     {
  //       provider: provider,
  //       name: name,
  //       clone_url: clone_url,
  //       html_url: html_url,
  //       tpl_url: tpl_url,
  //       default_branch: default_branch || null,
  //       full_name: full_name || null
  //     },
  //     { excludeExtraneousValues: true }
  //   );
  // }
  //
  // constructor(
  //   provider: GitConnectionTypeEnum,
  //   name: string,
  //   clone_url: string,
  //   html_url: string,
  //   tpl_url: string,
  //   default_branch?: string | null,
  //   full_name?: string | null
  // ) {
  //   this.provider = provider;
  //   this.name = name;
  //   this.clone_url = clone_url;
  //   this.html_url = html_url;
  //   this.tpl_url = tpl_url;
  //   this.default_branch = default_branch || null;
  //   this.full_name = full_name || null;
  // }
}
