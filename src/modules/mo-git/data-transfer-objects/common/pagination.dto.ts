import { Expose, Type } from 'class-transformer';

/**
 * Provider pagination patterns.
 *
 * github:    url?per_page=100&page=1 (no metaInfo in response)
 * bitbucket: url (metaInfo in response body: next)
 * gitlab:    url (metaInfo in response header: <https://gitlab.com/api/v4/projects/ligolang/ligo/repository/branches?id=ligolang/ligo&page=2&per_page=20>; rel="next", <https://gitlab.com/api/v4/projects/ligolang/ligo/repository/branches?id=ligolang/ligo&page=1&per_page=20>; rel="first", <https://gitlab.com/api/v4/projects/ligolang/ligo/repository/branches?id=ligolang/ligo&page=27&per_page=20>; rel="last")
 */
export class PaginationDto<T> {
  @Expose()
  values: T[];

  @Expose()
  next?: string;
}
