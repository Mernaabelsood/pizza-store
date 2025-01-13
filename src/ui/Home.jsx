import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div
      className=" text-center pt-24 flex justify-center items-center"
      style={{
        backgroundImage: 'url(/src/assests/pizza.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh', 
        opacity: 0.8
        
      }}
    >

      
 <div>

 <div>
        <h1 className="mb-8 text-xl font-semibold md:text-3xl text-black">
          The best pizza.
          <br />
          <span className="text-black">
            Straight out of the oven, straight to you.
          </span>
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
