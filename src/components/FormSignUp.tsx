import { useForm, SubmitHandler } from 'react-hook-form';
import { EMAIL_REGEX } from '../constant';

type Inputs = {
  email: string;
  password: string;
};

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className='w-full h-full flex justify-center items-center '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-8 w-80 flex flex-col border border-slate-200 shadow-lg rounded-sm'
      >
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
            placeholder='Password'
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
          className='px-4 py-2 self-center bg-green-300 rounded mt-4 hover:bg-opacity-80'
          type='submit'
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default FormSignUp;
