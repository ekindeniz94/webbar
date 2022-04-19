import { Expose } from 'class-transformer';

export class UpgradeNamespaceSubscriptionRequestDto {
  @Expose()
  subscriptionId: string;
}
