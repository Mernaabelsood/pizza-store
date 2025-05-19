import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import pizzaImage from '../assests/pizza.jpg';
import { useTranslation } from 'react-i18next';

function Home() {
  const username = useSelector((state) => state.user.username);
  const { t } = useTranslation();

  return (
    <div
      className=" flex items-center justify-center pt-24 text-center"
      style={{
        backgroundImage: `url(${pizzaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        opacity: 0.7,
      }}
    >
      <div>
        <div>
          <h1 className="mb-8 text-xl font-semibold text-black md:text-3xl">
            {t('welcome', 'Welcome to Fast React Pizza Co.')}
          </h1>
        </div>

        {username === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
