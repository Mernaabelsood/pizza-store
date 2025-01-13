import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
   
      {isLoading && <Loader />}

      <Header />

     
        <main >
          <Outlet />
        </main>
    

      <CartOverview />
    </>
  );
}

export default AppLayout;
