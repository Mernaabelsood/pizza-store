import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import { useTranslation } from 'react-i18next';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const { t } = useTranslation();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">{t('makePriority')}</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
