import { ProductDto } from '../data-transfer-objects';

export class PaypalProductData {
  name: string;
  description: string;
  type: string;
  category: string;
  image_url: string;
  home_url: string;

  static fromProduct(product: ProductDto): PaypalProductData {
    return {
      name: encodeURIComponent(product.name),
      description: encodeURIComponent(product.description),
      type: product.paypalProductType,
      category: product.paypalCategoryType,
      image_url: encodeURIComponent(product.imageUrl),
      home_url: encodeURIComponent(product.homeUrl)
    };
  }
}
