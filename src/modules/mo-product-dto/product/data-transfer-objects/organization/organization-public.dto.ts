import { Expose } from 'class-transformer';

export class OrganizationPublicDto {
  @Expose()
  name: string;

  @Expose()
  imageUrl?: string;
}
