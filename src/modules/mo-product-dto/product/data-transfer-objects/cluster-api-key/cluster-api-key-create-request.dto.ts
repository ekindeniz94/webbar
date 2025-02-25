import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import moment from 'moment';
import { StripTags } from '@mogenius/js-utils';

export class ClusterApiKeyCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  name: string;

  @Transform(({ value }) => {
    return value && moment(value).isValid() ? moment(value).add(24, 'hours').toDate() : null;
  })
  @IsOptional()
  @Expose()
  apiKeyExpiresAt: Date;
}
