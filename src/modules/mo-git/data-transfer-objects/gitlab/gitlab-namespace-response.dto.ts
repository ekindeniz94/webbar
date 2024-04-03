import { Expose } from 'class-transformer';

export class GitlabNamespaceResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  kind: string;

  @Expose()
  full_name: string;

  @Expose()
  full_path: string;

  @Expose()
  parent_id: string | null;

  @Expose()
  web_url: string;

  @Expose()
  path: string;
}
