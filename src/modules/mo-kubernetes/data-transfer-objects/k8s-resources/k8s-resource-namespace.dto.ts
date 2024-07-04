import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class K8sResourceNamespaceDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Transform(({ value, obj }) => value ?? moment(obj?.metadata?.creationTimestamp).toDate(), { toClassOnly: true })
  @Expose()
  createdAt: string | Date;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.uid, { toClassOnly: true })
  @Expose()
  id: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  name: string;
}
