import { Cart } from "../../../layers/domain/cart";

import { CartRepository } from '../../../layers/application/cart';

import { Cart as CartComponent, useCartViewModel } from './components/cart';

const repo = new CartRepository(Cart.createEmpty());

function App() {
  const vm = useCartViewModel(repo);
  return <CartComponent vm={vm} /> ;
}

export default App
