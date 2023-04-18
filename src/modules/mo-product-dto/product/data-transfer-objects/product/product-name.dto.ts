import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsNumber } from 'class-validator';
import moment from 'moment';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { NamespaceServiceKubernetesSettingsDto } from '../../../../mo-namespace';
import { ProductBulletPointDto } from './product-bullet-point.dto';

export class ProductNameDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
