import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { useTranslation } from 'react-i18next';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; {t('backToMenu')}</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        {t('yourCart', { username })}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          {t('orderPizzas')}
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          {t('clearCart')}
        </Button>
      </div>
    </div>
  );
}

export default Cart;
