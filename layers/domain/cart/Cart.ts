import { ICartItem } from './ports';

export class Cart {
  public items: ICartItem[];

  private constructor(products: ICartItem[]) {
    this.items = products;
  }

  public static create(products: ICartItem[]) {
    return new Cart(products);
  }

  public static createEmpty(): Cart {
    return Cart.create([]);
  }

  public add(product: ICartItem): Cart {
    const newProducts = [...this.items, product];
    return Cart.create(newProducts);
  }

  public edit(product: ICartItem): Cart {
    const newProducts = this.items.map(
      (currentProduct) => currentProduct.id === product.id ? product : currentProduct,
    );
    return Cart.create(newProducts);
  }

  public remove(product: ICartItem): Cart {
    const newProducts = this.items.filter(({ id }) => product.id !== id);
    return Cart.create(newProducts);
  }
}
