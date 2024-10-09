import { IdRequiredDto } from '@mogenius/core-dto';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class ListLabeledNetworkPolicyPortsRequestsDto {
  @IsNotEmpty()
  @Type(() => IdRequiredDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  cluster: IdRequiredDto;
}
