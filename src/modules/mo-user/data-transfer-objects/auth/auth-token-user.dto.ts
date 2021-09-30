import { Expose } from 'class-transformer';

export class AuthTokenUserDto {
  @Expose()
  id: string;
}
