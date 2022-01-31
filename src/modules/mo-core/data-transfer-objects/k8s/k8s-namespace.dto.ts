import { Expose } from "class-transformer";

export class K8sNamespaceDto {
    @Expose()
    id: string;

    @Expose()
    shortId: string;

    @Expose()
    displayName: string;

    @Expose()
    gitAccessToken: string;

    @Expose()
    clusterName: string;
}