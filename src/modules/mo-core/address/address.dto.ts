import { Expose } from 'class-transformer';

export class AddressDto {
  @Expose()
  addressLine1: string;

  @Expose()
  addressLine2: string;

  @Expose()
  addressLine3: string;

  @Expose()
  state: string;

  @Expose()
  zip: string;

  @Expose()
  city: string;

  @Expose()
  country: string;
}
