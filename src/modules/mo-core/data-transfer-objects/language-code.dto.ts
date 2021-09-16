import { BaseEntityDto } from './base.entity.dto';
import { Expose } from 'class-transformer';

export class LanguageCodeDto extends BaseEntityDto {
  @Expose()
  code: string;

  @Expose()
  language: string;

  @Expose()
  isActive: boolean;
}
