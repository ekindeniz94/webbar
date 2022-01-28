import { Expose } from "class-transformer";
import { NamespaceServicePortBindingTypeEnum } from "../../../mo-namespace/enums/namespace-service-service-port-binding.enum";

export class K8sPortsDto {
    @Expose()
    portType: NamespaceServicePortBindingTypeEnum;
    
    @Expose()
    port: number;
        
    @Expose()
    deletedAt?: Date;
}