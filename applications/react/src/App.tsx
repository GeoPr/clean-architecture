import { CartRepository, CartDataProvider } from '../../../layers/domain/cart';
import { NotificationsService } from '../../../layers/application/notifications';

import { Cart, useCartViewModel } from './components/cart';

const repo = new CartRepository(new CartDataProvider());
const notificationsService = new NotificationsService();

function App() {
  const vm = useCartViewModel(repo, notificationsService);
  return <Cart vm={vm} /> ;
}

export default App
