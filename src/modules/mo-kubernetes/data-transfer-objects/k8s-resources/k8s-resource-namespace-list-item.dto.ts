import { Expose, Transform } from 'class-transformer';

export class K8sResourceNamespaceListItemDto {
  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  name: string;
}
