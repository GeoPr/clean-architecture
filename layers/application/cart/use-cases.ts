import { Cart, ICartItem, ICartRepository } from '../../domain/cart';

export class AddToCartUseCase {
  public constructor(private readonly repo: ICartRepository) {}

  public async exec(product: ICartItem): Promise<Cart> {
    const cart = await this.repo.get();
    const updatedCart = cart.add(product);
    return this.repo.save(updatedCart);
  }
}
