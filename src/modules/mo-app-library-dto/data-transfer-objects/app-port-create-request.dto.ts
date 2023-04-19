import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../mo-project-dto';

export class AppPortCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServicePortBindingEnum)
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

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
