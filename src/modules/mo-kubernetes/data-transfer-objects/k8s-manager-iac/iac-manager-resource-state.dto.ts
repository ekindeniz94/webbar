import { Expose, Type } from 'class-transformer';
import { IacCommitRevisionDto } from './iac-commit-revision.dto';

export class IacManagerResourceStateDto {
  @Expose()
  kind: string;

  @Expose()
  namespace: string;

  @Expose()
  name: string;

  @Expose()
  lastUpdate: string;

  @Type(() => IacCommitRevisionDto)
  @Expose()
  revisions: IacCommitRevisionDto[];

  @Expose()
  author: string;

  @Expose()
  error: string;

  @Expose()
  state: string;
}
