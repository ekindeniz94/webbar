import { Expose, Transform } from 'class-transformer';
import { isArray } from 'class-validator';

export class KubernetesEventMetadataDto {
  // nginx-test-2-pxqksj-67d7c6dd8c-rcrrc.16e56ecb5c2bc2dd
  @Expose()
  name: string;

  // ticket-794-prod-evfdce-4mdz6a
  @Expose()
  namespace: string;

  @Expose()
  uid: string;

  @Expose()
  resourceVersion: string;

  @Expose()
  creationTimestamp: string;

  /**
   * {
   *   "manager": "kubelet",
   *   "operation": "Update",
   *   "apiVersion": "v1",
   *   "time": "2022-04-13T10:44:18Z",
   *   "fieldsType": "FieldsV1",
   *   "fieldsV1": {
   *     "f:count": {},
   *     "f:firstTimestamp": {},
   *     "f:involvedObject": {},
   *     "f:lastTimestamp": {},
   *     "f:message": {},
   *     "f:reason": {},
   *     "f:source": {
   *       "f:component": {},
   *       "f:host": {}
   *     },
   *     "f:type": {}
   *   }
   * }
   */
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  managedFields: any[];

  @Expose()
  annotations: Record<string, string>;

  @Expose()
  labels: Record<string, string>;
}
