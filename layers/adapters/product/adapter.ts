import { ICartItem } from '../../domain/cart';
import { Product } from '../../domain/product';

export function productAdapter(product: Product): ICartItem<{ created: number }> {
  return {
    id: product.id,
    payload: {
      created: product.created,
    },
  }
}
