import { useContext } from 'react';
import { AuthContext } from '../../store/auth/AuthProvider';

const ProfilePage = () => {
  const authCtx = useContext(AuthContext);
  return (
    <section className='p-4 flex flex-col justify-center items-center'>
      <h1 className='text-xl text-center mb-8'>User Profile</h1>
      <div className=''>
        <p>
          <span className='w-16 inline-block'>Name:</span>
          <span className='font-bold'> {authCtx.userData.name}</span>
        </p>
        <p>
          <span className='w-16 inline-block'>Email:</span>
          <span className='font-bold'> {authCtx.userData.email}</span>
        </p>
      </div>
    </section>
  );
};
export default ProfilePage;
