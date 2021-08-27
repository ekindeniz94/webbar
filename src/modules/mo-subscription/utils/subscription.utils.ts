import { ProductDto } from '../data-transfer-objects';

export class PaypalPlanData {
  billing_cycles: any[];
  payment_preferences: any;
  taxes: any;

  static fromProduct(product:ProductDto): any {
    return {
      billing_cycles: [
        {
          frequency: {
            interval_unit: 'MONTH',             //  Billing per Month
            interval_count: 1
          },
          tenure_type: 'REGULAR',
          sequence: 1,                          // every Month
          total_cycles: 0,                      // infinit cycles
          pricing_scheme: {
            fixed_price: {
              value: product.displayPriceMonth, // PRICE
              currency_code: 'EUR'
            }
          }
        }
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        payment_failure_threshold: 1
      },
      taxes: {
        percentage: '19',
        inclusive: true
      }
    };
  }
}
