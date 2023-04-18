import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ProductCreateRequestDto } from './product-create-request.dto';
import { NamespaceServiceKubernetesSettingsPatchRequestDto } from '../../../../mo-namespace';

export class ProductPatchRequestDto extends ProductCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => NamespaceServiceKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsPatchRequestDto;
}
