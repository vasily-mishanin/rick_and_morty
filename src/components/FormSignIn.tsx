import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX } from '../constants.ts';
import { auth } from '../firebase.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';

type Inputs = {
  email: string;
  password: string;
};

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const signIn: SubmitHandler<Inputs> = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-full h-full flex justify-center items-center '>
      <form
        onSubmit={handleSubmit(signIn)}
        className='p-8 w-80 flex flex-col border border-slate-200 shadow-lg rounded-sm'
      >
        <h1 className='mb-8 self-center text-xl'>Вход</h1>
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
