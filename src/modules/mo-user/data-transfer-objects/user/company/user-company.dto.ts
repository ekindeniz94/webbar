import {Expose, Type} from 'class-transformer';
import {AddressDto} from "../../../../mo-core";

export class UserCompanyDto {
  @Expose()
  name: string;

  @Expose()
  vatNumber: string;

  @Type(() => AddressDto)
  @Expose()
  address: AddressDto;
}
