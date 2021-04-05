import { Expose } from 'class-transformer';

export class GroupCreateResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  scope: string;

  @Expose()
  description: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}
