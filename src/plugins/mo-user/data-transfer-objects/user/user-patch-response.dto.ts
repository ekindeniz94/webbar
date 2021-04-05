import { UserApiKeyDto } from './user-api-key.dto';
import { Exclude } from 'class-transformer';
import { UserOneTimeKeyDto } from './user-one-time-key.dto';
import { UserPurchasedProductDto } from './user-purchased-product.dto';
import { UserDto } from './user.dto';

export class UserPatchResponseDto extends UserDto {
  @Exclude()
  apiKeys: UserApiKeyDto[];

  @Exclude()
  oneTimeKeys: UserOneTimeKeyDto[];

  @Exclude()
  purchasedProducts: UserPurchasedProductDto[];
}
