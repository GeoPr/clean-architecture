import { Cart, ICartRepository } from '../../domain/cart';

export class CartRepository implements ICartRepository {
    public constructor(private cart: Cart) {}

    public get(): Promise<Cart> {
      return new Promise(resolve => {
        setTimeout(resolve, 1000, this.cart);
      })
    }

    public save(cart: Cart): Promise<Cart> {
      return new Promise(resolve => {
        setTimeout(() => {
          this.cart = cart;
          resolve(this.cart);
        }, 1000);
      })
    }
}
