import { Expose } from 'class-transformer';
import { BreadcrumbListTypeEnum } from '../enums';

export class BreadcrumbResultDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  type: BreadcrumbListTypeEnum;
}
