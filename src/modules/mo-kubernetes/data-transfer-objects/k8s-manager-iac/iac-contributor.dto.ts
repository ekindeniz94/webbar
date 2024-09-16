import { Expose } from 'class-transformer';

export class IacContributorDto {
  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  lastActivityTime: string;
}
