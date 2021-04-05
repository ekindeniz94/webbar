import { Expose } from 'class-transformer';

export class UserApiKeyDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  key: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  @Expose()
  expiresAt: number;
}
