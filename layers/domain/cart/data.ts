import { Cart } from './Cart';
import { ICartDataProvider } from './ports';

export class CartDataProvider implements ICartDataProvider {
    public async get(): Promise<Cart> {
      return new Promise(resolve => setTimeout(resolve, 1000, Cart.createEmpty()));
    }

    public async save(cart: Cart): Promise<Cart> {
      return new Promise(resolve => setTimeout(resolve, 1000, cart));
    }
}
