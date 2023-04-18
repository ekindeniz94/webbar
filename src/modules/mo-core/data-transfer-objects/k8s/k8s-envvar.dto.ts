import { Expose } from 'class-transformer';
import { NamespaceServiceEnvVarTypeEnum2 } from '../../../mo-namespace/enums/namespace-envvar-type.enum';

export class K8sEnvVarDto2 {
    @Expose()
    name: string;

    @Expose()
    value: string;

    @Expose()
    type: NamespaceServiceEnvVarTypeEnum2;
}