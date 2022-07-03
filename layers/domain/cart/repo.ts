import { ICartDataProvider, ICartItem, ICartRepository } from './ports';
import { Cart } from './Cart';

export class CartRepository implements ICartRepository {
    public constructor(private cartDataProvider: ICartDataProvider) {}

    public async getItems(): Promise<ICartItem[]> {
      const cart = await this.cartDataProvider.get();
      return cart.items;
    }

    public saveItems(items: ICartItem[]): Promise<Cart> {
      const cart = Cart.create(items);
      return this.cartDataProvider.save(cart);
    }
}
