import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants.ts';
import { auth } from '../../firebase.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

type Inputs = {
  email: string;
  password: string;
};

const FormSignIn = () => {
  const [signInError, setSignInError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const signIn: SubmitHandler<Inputs> = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential);
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error when sigin in', error.message);
        setSignInError(error.message);
      }
    }
    // signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //   })
    //   .catch((err) => console.log('Error when sigin in', err));
  };

  // TODO: invalid creds UI feedback
  return (
    <div className='w-full h-full flex justify-center items-center '>
      <form
        onSubmit={handleSubmit(signIn)}
        className='p-8 w-80 flex flex-col border border-slate-200 shadow-lg rounded-sm'
      >
        <h1 className='mb-4 self-center text-xl'>Вход</h1>
        <p className=' h-5 px-1 text-red-400 text-center text-xs mb-4'>
          {signInError && 'Неверный email или пароль'}
        </p>
        {/* TODO: refactor to separate component Input */}
        <div className='flex flex-col mb-2 '>
          <input
            className='hover:border-green-100 focus:border-green-300 transition-colors'
            placeholder='Email'
            defaultValue=''
            {...register('email', {
              required: 'Email - обязательное поле',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Введите валидный email',
              },
            })}
          />
          {
            <span className=' h-5 px-1 text-red-400 text-right text-xs'>
              {errors.email && errors.email.message}
            </span>
          }
        </div>
        <div className='flex flex-col'>
          <input
            className='hover:border-green-100 focus:border-green-300 transition-colors'
            placeholder='Пароль'
            type='password'
            {...register('password', {
              required: 'Введите пароль',
              minLength: { value: 6, message: 'Минимум 6 символов' },
            })}
          />
          {
            <span className=' h-5 px-1 text-red-400 text-right text-xs'>
              {errors.password && errors.password.message}
            </span>
          }
        </div>
        <button
          className='px-4 py-2 self-center bg-green-400 rounded mt-4 hover:bg-opacity-80 transition-colors'
          type='submit'
        >
          Войти
        </button>
      </form>
    </div>
  );
};
export default FormSignIn;
