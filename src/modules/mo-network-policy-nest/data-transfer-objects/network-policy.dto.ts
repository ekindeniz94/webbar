import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { V1NetworkPolicySpec } from '@kubernetes/client-node';
import * as JSYAML from 'js-yaml';

export class NetworkPolicyDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;

  // @IsNotEmpty()
  // @IsEnum(ServiceControllerEnum)
  // @Expose()
  // controllerType: ServiceControllerEnum;

  @IsNotEmpty()
  @Transform(({ value, obj }: { value: string; obj: NetworkPolicyDto }) => {
    obj.specYaML = JSYAML.dump(value);
    return value;
  })
  @Expose()
  spec: V1NetworkPolicySpec;

  @Expose()
  specYaML: string;
}
