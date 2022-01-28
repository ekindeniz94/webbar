import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { AddressCreateRequestDto } from './address-create-request.dto';

export class AddressPatchRequestDto extends AddressCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
