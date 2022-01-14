import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ProductCreateRequestDto } from './product-create-request.dto';

export class ProductPatchRequestDto extends ProductCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Expose()
  @IsString()
  @IsOptional()
  paypalId: string;
}
