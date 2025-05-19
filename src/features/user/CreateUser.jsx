import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4  font-extrabold text-black ">{t('welcomeUser')}</p>

      <input
        type="text"
        placeholder={t('yourFullName')}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72 "
      />

      {username !== '' && (
        <div>
          <Button type="primary">{t('startOrdering')}</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
