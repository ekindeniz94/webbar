import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ProductCreateRequestDto } from './product-create-request.dto';

export class ProductPatchRequestDto extends ProductCreateRequestDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  paypalId: string;
}
