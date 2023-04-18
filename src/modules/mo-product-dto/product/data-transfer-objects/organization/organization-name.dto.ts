import { Expose } from 'class-transformer';

export class OrganizationNameDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
