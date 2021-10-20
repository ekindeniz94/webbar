import { NotificationDto } from './notification.dto';
import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceDto, NamespaceServiceDto } from '../../mo-namespace';

export class NamespaceNotificationDto extends NotificationDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace?: NamespaceDto;

  @Type(() => NamespaceServiceDto)
  @Expose()
  namespaceService?: NamespaceServiceDto;

  @Transform(({ value }) => +value)
  @Expose()
  subNotificationCount: number;

  @Expose()
  commandId: string;
}

/*

"id": "030ede8c-c288-4010-ba13-4d2acaeeb003",
            "createdAt": "2021-10-20T05:34:13.995Z",
            "title": "NamespaceDelete -> testbeh-prod-c6n50s",
            "content": "null",
            "type": "info",
            "contentType": "TEXT",
            "userId": "c1a87d09-ae2a-4f72-9108-4da480c85541",
            "namespaceId": null,
            "namespaceServiceId": null,
            "subNotificationCount": null,
            "namespaceName": null,
            "namespaceServiceName": null,
            "commandId": "3rr2mmayr6s6pd7wuganfq6"
 */
