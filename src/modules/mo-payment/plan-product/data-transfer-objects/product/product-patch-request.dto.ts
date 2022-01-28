import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ProductCreateRequestDto } from './product-create-request.dto';
import { PriceIntervalPatchRequestDto } from '../price-interval';
import { NamespaceServiceKubernetesSettingsPatchRequestDto } from '../../../../mo-namespace';

export class ProductPatchRequestDto extends ProductCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @IsOptional()
  @Type(() => PriceIntervalPatchRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  priceIntervals: PriceIntervalPatchRequestDto[];

  @Type(() => NamespaceServiceKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsPatchRequestDto;
}
