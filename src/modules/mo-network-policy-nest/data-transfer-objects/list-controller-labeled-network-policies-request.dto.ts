import { IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Expose } from 'class-transformer';
import { ServiceControllerEnum } from '../../mo-project-dto';

export class ListControllerLabeledNetworkPoliciesRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controllerType: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
}
