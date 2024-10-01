import { IdRequiredDto } from '@mogenius/core-dto';
import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export class LabeledNetworkPolicyPortsListRequestsDto {
  @IsNotEmpty()
  @Type(() => IdRequiredDto)
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  cluster: IdRequiredDto;
}
