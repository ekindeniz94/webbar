import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServicePortBindingEnum } from '../../mo-project-dto/enums/project-namespace-service-port-binding.enum';
import { IsBoolean, isBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class AppPortDto {
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServicePortBindingEnum)
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Expose()
  internalPort: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  // @Transform(({ value, obj }) => (obj?.portType === NamespaceServicePortBindingTypeEnum.HTTPS ? 80 : value))
  @Expose()
  externalPort: number;

  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;
}
