import { Exclude } from 'class-transformer';
import { UserApiKeyDto } from './user-api-key.dto';
import { UserOneTimeKeyDto } from './user-one-time-key.dto';
import { UserPurchasedProductDto } from './user-purchased-product.dto';
import { UserDto } from './user.dto';

export class UserRegisterResponseDto extends UserDto {
  @Exclude()
  apiKeys: UserApiKeyDto[];

  @Exclude()
  oneTimeKeys: UserOneTimeKeyDto[];

  @Exclude()
  purchasedProducts: UserPurchasedProductDto[];
}
