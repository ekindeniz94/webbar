import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ServiceControllerEnum } from '../../enums/service-controller.enum';

export class ExistsServiceInClusterRequestDto {
  @IsNotEmpty()
  @IsEnum(ServiceControllerEnum)
  @Expose()
  controller: ServiceControllerEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;
}
