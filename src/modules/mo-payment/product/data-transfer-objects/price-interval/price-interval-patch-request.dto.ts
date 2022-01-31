import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { PriceIntervalCreateRequestDto } from './price-interval-create-request.dto';

export class PriceIntervalPatchRequestDto extends PriceIntervalCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string;
}
