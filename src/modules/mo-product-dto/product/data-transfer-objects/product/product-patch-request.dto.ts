import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ProductCreateRequestDto } from './product-create-request.dto';
import { ProductKubernetesSettingsPatchRequestDto } from './product-kubernetes-settings-patch-request.dto';

export class ProductPatchRequestDto extends ProductCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => ProductKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProductKubernetesSettingsPatchRequestDto;
}
