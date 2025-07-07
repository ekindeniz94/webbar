import { Expose } from 'class-transformer';

export class GithubWorkflowItemDto {
  @Expose()
  fileName: string;

  @Expose()
  htmlUrl: string;

  @Expose()
  content: any;

  @Expose()
  type: 'MO_TEMPLATE' | 'REPOSITORY';
}
