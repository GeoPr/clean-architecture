import React from "react";

import { Cart, ICartRepository } from "../../../../../layers/domain/cart";
import { Product } from "../../../../../layers/domain/product";

import { AddToCartUseCase } from "../../../../../layers/application/cart";

import { productAdapter } from "../../../../../layers/adapters/product";

export function useViewModel(repo: ICartRepository) {
  const [cart, setCart] = React.useState<Cart | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    repo.get().then(setCart);
  }, [repo]);

  return {
    cart,
    isLoading,

    async add(product: Product) {
      setIsLoading(true);

      try {
        const cartItem = productAdapter(product);
        const newCart = await new AddToCartUseCase(repo).exec(cartItem);
        setCart(newCart);
        setIsLoading(false);
      } catch {
        console.error('error');
      }
    },
  }
}
