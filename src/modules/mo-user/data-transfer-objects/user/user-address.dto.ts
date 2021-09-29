import { Expose } from 'class-transformer';

export class UserAddressDto {
  @Expose()
  street: string;

  @Expose()
  houseNumber: string;

  @Expose()
  state: string;

  @Expose()
  zip: string;

  @Expose()
  city: string;

  @Expose()
  country: string;
}
