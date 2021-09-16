import { PlanDto, CurrencyDto } from '../data-transfer-objects';

export class PaypalPlanData {
  product_id: string;
  name: string;
  description: string;
  billing_cycles: any[];
  payment_preferences: any;
  taxes: any;

  static fromPlan(plan: PlanDto): PaypalPlanData[] {
    let data: PaypalPlanData[] = [];
    for (const currency of plan.currencies) {
      data.push({
        product_id: plan.product.id,
        name: plan.name,
        description: plan.description,
        billing_cycles: [
          {
            frequency: {
              interval_unit: currency.interval,     //  Billing per Month or Year
              interval_count: 1
            },
            tenure_type: 'REGULAR',
            sequence: 1,                            // every Month or Year
            total_cycles: 0,                        // infinit cycles
            pricing_scheme: {
              fixed_price: {
                value: currency.pricePerInterval,   // PRICE
                currency_code: currency.type
              }
            }
          }
        ],
        payment_preferences: {
          auto_bill_outstanding: true,
          payment_failure_threshold: 1
        },
        taxes: {
          percentage: currency.taxPercent,
          inclusive: true
        }
      });
    }
    return data;
  }
}
