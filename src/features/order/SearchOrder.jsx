import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={t('searchOrder')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
