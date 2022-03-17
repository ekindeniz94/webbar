import { Expose, Transform, Type } from 'class-transformer';
import {isBoolean, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional} from 'class-validator';
import { NamespaceServicePortBindingTypeEnum } from '../../../mo-namespace/enums/namespace-service-service-port-binding.enum';

export class ServicePortCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(NamespaceServicePortBindingTypeEnum)
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  internalPort: number;

  @Type(() => Number)
  // @Transform(({ value, obj }) => (obj?.portType === NamespaceServicePortBindingTypeEnum.HTTPS ? 80 : value))
  @IsOptional()
  @IsNumber()
  @Expose()
  externalPort: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  expose: boolean;
}
