import { Expose } from "class-transformer";
import { NamespaceServicePortBindingTypeEnum } from "../../../mo-namespace/enums/namespace-service-service-port-binding.enum";

export class K8sPortsDto {
    @Expose()
    portType: NamespaceServicePortBindingTypeEnum;
    
    @Expose()
    internalPort: number;

    @Expose()
    externalPort: number;

    @Expose()
    expose: boolean;
        
    @Expose()
    deletedAt?: Date;
}