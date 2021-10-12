import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsString, ValidateNested } from 'class-validator';
import { FileDto } from '../../../mo-file/data-transfer-objects/file.dto';
import { ServiceGroupStateEnum } from '../../enums';
import { ServiceCreateRequestDto } from '../service';

export class ServiceGroupCreateRequestDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  descriptionShort: string;

  @Expose()
  @IsString()
  description: string;

  @Type(() => FileDto)
  @Expose()
  image: FileDto;

  @Expose()
  @Type(() => ServiceCreateRequestDto)
  @Transform(({ value }) => value ?? [])
  @ValidateNested()
  services: ServiceCreateRequestDto[];

  @Expose()
  @IsEnum(ServiceGroupStateEnum)
  @Transform(({ value }) => value ?? ServiceGroupStateEnum.INTERNAL)
  state: ServiceGroupStateEnum;

  @Expose()
  @IsString()
  color: string;
}
