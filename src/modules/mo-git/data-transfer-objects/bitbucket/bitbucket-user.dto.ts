import { Expose, Transform } from 'class-transformer';

export class BitbucketUserDto {
  @Transform(({ value, obj }) => value ?? obj?.uuid, { toClassOnly: true })
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Transform(({ value, obj }) => value ?? (obj?.display_name || obj.nickname), { toClassOnly: true })
  @Expose()
  name: string;

  @Transform(({ value, obj }) => value ?? obj?.username, { toClassOnly: true })
  @Expose()
  login: string;

  @Transform(({ value, obj }) => value ?? obj?.links?.avatar?.href, { toClassOnly: true })
  @Expose()
  avatar_url: string;

  @Transform(({ value, obj }) => value ?? obj?.type, { toClassOnly: true })
  @Expose()
  type: string;
}
