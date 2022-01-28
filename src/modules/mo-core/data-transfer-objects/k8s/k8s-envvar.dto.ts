import { Expose } from "class-transformer";
import { NamespaceServiceEnvVarTypeEnum } from "../../../mo-namespace/enums/namespace-envvar-type.enum";

export class K8sEnvVarDto {
    @Expose()
    name: string;

    @Expose()
    value: string;

    @Expose()
    type: NamespaceServiceEnvVarTypeEnum;
}