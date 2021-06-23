import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST, IsInStringList } from '../../../mo-core';
import { ClusterDto, DEFAULT_KUBERNETES_CLUSTER } from '../kubernetes/cluster.dto';

export class NamespaceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.NAME.MAX)
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(DTO_VALIDATION_CONST.NAMESPACE.NAME.MATCHES, {
    message: '$property must conform to: a-z or A-Z or 0-9 or - or _ ;min 6, max 30 char'
  })
  @Expose()
  hostname: string;

  @IsNotEmpty()
  @IsString()
  @IsInStringList(DTO_VALIDATION_CONST.MO_USER_DOMAINS)
  @Expose()
  domain: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.DESCRIPTION.MAX)
  @Expose()
  description: string;

  @IsOptional()
  @MaxLength(DTO_VALIDATION_CONST.NAMESPACE.ICON.MAX)
  @Expose()
  icon: string;

  @IsOptional()
  @Transform(({ value }) => value ?? DEFAULT_KUBERNETES_CLUSTER)
  @Type(() => ClusterDto)
  @Expose()
  cluster: ClusterDto;
}
