import { Cart, ICartItem, ICartRepository } from '../../domain/cart';
import { INotificationsService } from './ports';

export class AddToCartUseCase {
  public constructor(
    private readonly repo: ICartRepository,
    private readonly cart: Cart,
    private readonly notificationsService: INotificationsService,
  ) {}

  public async exec(product: ICartItem): Promise<Cart> {
    try {
      const updatedCart = this.cart.add(product);
      const cart = await this.repo.saveItems(updatedCart.items);

      this.notificationsService.notifySuccess('added');

      return cart;
    } catch {
      this.notificationsService.notifyError('error');
    }
  }
}
