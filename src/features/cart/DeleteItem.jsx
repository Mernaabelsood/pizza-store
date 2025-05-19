import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useTranslation } from 'react-i18next';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      {t('delete')}
    </Button>
  );
}

export default DeleteItem;
