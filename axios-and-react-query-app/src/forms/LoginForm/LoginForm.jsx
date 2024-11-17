/* eslint-disable no-extra-boolean-cast */
import FieldSet from '../../Sheard/FieldSet/FieldSet';
import Field from '../../Sheard/Field/Field';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className='flex justify-center items-center mt-16'>
      <form onSubmit={handleSubmit(handForm)}>
        <FieldSet label=' Login'>
          <div className='border border-box rounded-md border-gray-300 p-5'>
            {/* Email input  */}
            <Field
              label='Email'
              error={errors.email}>
              <input
                {...register('email', { required: 'Email is required' })}
                className={`p-2 border border-box w-[300px] rounded-md  ${
                  !!errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                type='email'
                name='email'
                id='email'
                placeholder='Type your email'
              />
            </Field>
            {/* Password input  */}
            <Field
              label='Password'
              error={errors.password}>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Your password must be at least 8 characters.',
                  },
                })}
                className={`p-2 border border-box w-[300px] rounded-md  ${
                  !!errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                type='password'
                name='password'
                id='password'
                placeholder='Type your password'
              />
            </Field>
            <Field>
              <button
                type='submit'
                className='text-white bg-black rounded-md text-center w-[300px] py-[6px] mt-2 font-bold'>
                Login
              </button>
            </Field>
          </div>
          <p className='font-medium'>
            You have no account{' '}
            <span className='underline'>
              <Link to='/register'>Register?</Link>
            </span>
          </p>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
