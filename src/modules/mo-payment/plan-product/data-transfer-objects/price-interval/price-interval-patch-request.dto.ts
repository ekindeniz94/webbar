import {Expose} from 'class-transformer';
import {IsNotEmpty, IsString, IsUUID} from 'class-validator';
import {PriceIntervalCreateRequestDto} from './price-interval-create-request.dto';

export class PriceIntervalPatchRequestDto extends PriceIntervalCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
