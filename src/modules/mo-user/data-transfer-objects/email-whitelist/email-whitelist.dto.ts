import { Expose } from "class-transformer";
import { BaseEntityDto } from '../../../mo-core';

export class EmailWhitelistDto extends BaseEntityDto {
  @Expose()
  domain: string;

  @Expose()
  email: string;
}
