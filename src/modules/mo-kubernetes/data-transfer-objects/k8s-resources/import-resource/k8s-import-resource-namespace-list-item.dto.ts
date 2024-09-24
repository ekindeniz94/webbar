// import { Expose, Transform } from 'class-transformer';
//
// export class K8sImportResourceNamespaceListItemDto2 {
//   @Transform(({ value, obj }) => value ?? obj?.metadata?.uid, { toClassOnly: true })
//   @Expose()
//   id: string;
//
//   @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
//   @Expose()
//   displayName: string;
//
//   @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
//   @Expose()
//   name: string;
// }
