import React from "react";

import { Cart, ICartRepository } from "../../../../../layers/domain/cart";
import { Product } from "../../../../../layers/domain/product";

import { AddToCartUseCase, INotificationsService } from "../../../../../layers/application/cart";

import { productAdapter } from "../../../../../layers/adapters/product";

export function useViewModel(repo: ICartRepository, notificationsService: INotificationsService) {
  const [cart, setCart] = React.useState<Cart | undefined>();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  React.useEffect(() => {
    repo.getItems().then((items) => setCart(Cart.create(items)));
  }, [repo]);

  return {
    cart,

    isLoading,
    error,

    async add(product: Product) {
      if (!cart) return;

      setIsLoading(true);

      try {
        const cartItem = productAdapter(product);
        const useCase = new AddToCartUseCase(repo, cart, notificationsService);
        const newCart = await useCase.exec(cartItem);
        setCart(newCart);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    },
  }
}
