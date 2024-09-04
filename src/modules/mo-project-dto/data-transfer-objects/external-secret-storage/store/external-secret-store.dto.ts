import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class ExternalSecretStoreDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Expose()
  name: string;

  @Expose()
  prefix: string;

  @Transform(({ value, obj }) => value ?? obj['project-id'], { toClassOnly: true })
  @Expose()
  projectId: string;

  @Transform(({ value, obj }) => value ?? obj['shared-path'], { toClassOnly: true })
  @Expose()
  sharedPath: string;

  @Expose()
  role: string;

  @Transform(({ value, obj }) => value ?? obj['vault-url'], { toClassOnly: true })
  @Expose()
  vaultURL: string;

  @Transform(({ value }) => {
    switch (value) {
      case 'True':
      case true:
        return true;
      case 'False':
      case false:
        return false;
      default:
        return 'Unknown';
    }
  })
  @Expose()
  status: boolean | 'Unknown';

  @Expose()
  message: string;

  @Expose()
  reason: string;

  @Expose()
  type: 'Deleted' | 'Ready';
}
