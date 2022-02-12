import {Expose, Type} from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';

export class ChangelogDto extends BaseEntityDto {
  @Expose()
  version: string;

  @Expose()
  title: string;

  @Expose()
  logText: string;

  @Type(() => Boolean)
  @Expose()
  published: boolean;
}
