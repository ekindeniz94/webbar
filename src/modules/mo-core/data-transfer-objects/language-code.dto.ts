import {Expose, Type} from 'class-transformer';

export class LanguageCodeDto {
  @Expose()
  code: string;

  @Expose()
  language: string;

  @Type(() => Boolean)
  @Expose()
  isActive: boolean;
}
