import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProductVoucherCreateRequestDto } from './product-voucher-create-request.dto';

export class ProductVoucherPatchRequestDto extends ProductVoucherCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
