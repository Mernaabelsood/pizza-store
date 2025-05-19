import LinkButton from '../../ui/LinkButton';
import { useTranslation } from 'react-i18next';

function EmptyCart() {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">{t('backToMenu')}</LinkButton>

      <p className="mt-7 font-semibold">{t('cartEmpty')}</p>
    </div>
  );
}

export default EmptyCart;
