import { Expose } from 'class-transformer';

export class IacCommitRevisionDto {
  @Expose()
  hash: string;

  @Expose()
  author: string;

  @Expose()
  date: string;

  @Expose()
  diff: string;
}
