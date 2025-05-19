import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="fixed z-10 flex w-full items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        {t('title')}
      </Link>
      <Link to="/dashboard" className="tracking-widest">
        {t('statistics')}
      </Link>
      <button
        onClick={toggleLanguage}
        className="ml-4 rounded border border-yellow-600 bg-white px-2 py-1 text-yellow-600 transition hover:bg-yellow-100"
        aria-label="Toggle language"
      >
        {lang === 'en' ? 'العربية' : 'English'}
      </button>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
