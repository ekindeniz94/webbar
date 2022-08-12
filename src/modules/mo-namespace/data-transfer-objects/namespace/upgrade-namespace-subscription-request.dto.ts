import { Expose } from 'class-transformer';
import { IsString, ValidateIf } from 'class-validator';

export class UpgradeNamespaceSubscriptionRequestDto {
  @ValidateIf((object: UpgradeNamespaceSubscriptionRequestDto, value: string) => !object.priceIntervalId)
  @IsString()
  @Expose()
  subscriptionId: string;

  @ValidateIf((object: UpgradeNamespaceSubscriptionRequestDto, value: string) => !object.subscriptionId)
  @IsString()
  @Expose()
  priceIntervalId: string;

  @ValidateIf(
    (object: UpgradeNamespaceSubscriptionRequestDto, value: string) =>
      !!object.subscriptionId || !!object.priceIntervalId
  )
  @IsString()
  @Expose()
  countryCode: string;
}
