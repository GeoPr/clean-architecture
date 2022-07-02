import { Cart } from './Cart';

type TCartItemId = string;

export interface ICartItem<T extends Record<string, unknown> = Record<string, unknown>> {
  id: TCartItemId;
  payload: T;
}

export interface ICartRepository {
  get(): Promise<Cart>;
  save(cart: Cart): Promise<Cart>;
}

