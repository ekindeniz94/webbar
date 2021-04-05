import { Expose } from 'class-transformer';

export class UserOneTimeKeyDto {
  @Expose()
  id: string;

  @Expose()
  key: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Expose()
  expiresAt: number;
}
