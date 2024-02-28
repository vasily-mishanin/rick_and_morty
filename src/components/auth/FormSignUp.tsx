import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX } from '../../constants.ts';
import { auth } from '../../firebase.ts';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

type Inputs = {
  username?: string;
  email: string;
  password: string;
};

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const signUp: SubmitHandler<Inputs> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: data.username,
        });
      })
      .then(() => {
        console.log('User profile updated successfully');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-full h-full flex justify-center items-center '>
      <form
        onSubmit={handleSubmit(signUp)}
        className='p-8 w-80 flex flex-col border border-slate-200 shadow-lg rounded'
      >
        <h1 className='mb-8 self-center text-xl'>Регистрация</h1>
        <div className='flex flex-col mb-2 '>
          <input
            className='hover:border-green-100 focus:border-green-300 transition-colors'
            type='text'
            placeholder='Имя'
            defaultValue=''
            {...register('username', {
              minLength: { value: 6, message: 'Минимум 3 символа' },
            })}
          />
          {
            <span className=' h-5 px-1 text-red-400 text-right text-xs'>
              {errors.username && errors.username.message}
            </span>
          }
        </div>

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
          Создать аккаунт
        </button>
      </form>
    </div>
  );
};
export default FormSignUp;
