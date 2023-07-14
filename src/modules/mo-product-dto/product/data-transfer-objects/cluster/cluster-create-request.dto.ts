import { Expose, Transform, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { MoProjectDtoUtils, PROJECT_CONST } from '../../../../mo-project-dto';
import { ClusterProviderEnum } from '../../enums';
import { ProductDto } from '../product';

export class ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(64)
  @Matches(/^([a-z])([a-z0-9-_])/, {
    message: '$property must conform to: a-z, 0-9, - ;min 3, max 64 char'
  })
  @Transform(({ value }) => {
    if (!value) {
      return 'mogenius';
    }
    return MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX);
  })
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsEnum(ClusterProviderEnum)
  @Transform(({ value }) => value ?? ClusterProviderEnum.BRING_YOUR_OWN)
  @Expose()
  provider: ClusterProviderEnum;

  @IsString()
  @Transform(({ value }) => value ?? 'mogenius')
  @Expose()
  namespaceName: String;

  @IsNotEmpty()
  @Type(() => ProductDto)
  @Expose()
  product: ProductDto;
}
