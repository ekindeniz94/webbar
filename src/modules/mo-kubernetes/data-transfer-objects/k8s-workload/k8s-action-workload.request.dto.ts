import { Expose, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { K8sGetWorkloadRequestDto } from './k8s-get-workload.request.dto';
import { K8sActionWorkloadEnum } from '../../enums';

export class K8sActionWorkloadRequestDto {
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sGetWorkloadRequestDto)
  @Expose()
  resource: K8sGetWorkloadRequestDto;

  @IsNotEmpty()
  @IsEnum(K8sActionWorkloadEnum)
  @Expose()
  action: K8sActionWorkloadEnum;
}
