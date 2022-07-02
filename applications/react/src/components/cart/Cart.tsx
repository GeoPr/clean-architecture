import { Product } from "../../../../../layers/domain/product";

import { useViewModel } from "./useViewModel";

type TProps = {
  vm: ReturnType<typeof useViewModel>;
}

export const Cart = ({ vm }: TProps) => {
  if (!vm.cart) return null;

  const handleClick = () => {
    const randomProduct = new Product(Math.random().toString(), Date.now());
    vm.add(randomProduct);
  };

  return (
    <>
      {vm.cart.items.map(item => <div key={item.id}>{item.id}</div>)}
      {vm.isLoading && <div>loading...</div>}
      <button onClick={handleClick} disabled={vm.isLoading}>add random product</button>
    </>
  )
};
