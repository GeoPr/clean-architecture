import { Cart } from './Cart';

type TCartItemId = string;

export interface ICartItem<T extends Record<string, unknown> = Record<string, unknown>> {
  id: TCartItemId;
  payload: T;
}

export interface ICartDataProvider {
  get(): Promise<Cart>;
  save(cart: Cart): Promise<Cart>;
}

export interface ICartRepository {
  getItems(): Promise<ICartItem[]>;
  saveItems(items: ICartItem[]): Promise<Cart>;
}

