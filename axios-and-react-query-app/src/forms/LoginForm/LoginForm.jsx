/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import FieldSet from '../../Sheard/FieldSet/FieldSet';
import Field from '../../Sheard/Field/Field';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';

import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handForm = async (formData) => {
    console.log(formData);

    try {
      await signIn(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }

    // const user = { email: 'x@gmail.com', password: '123456789' };
    // const found =
    //   formData.email === user.email && formData.password === user.password;
    // if (!found) {
    //   setError('root.random', {
    //     message: `User with email ${formData.email} is not found`,
    //     type: 'random',
    //   });
    // }
  };

  const handleLogInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
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
            <div className='text-red-500'>{errors?.root?.random?.message}</div>
            <Field>
              <button
                type='submit'
                className='text-white bg-black rounded-md text-center w-[300px] py-[6px] mt-2 font-bold'>
                Login
              </button>
            </Field>
            {/* social Log in with google and other */}
            <div className='mt-3 text-center'>
              <button
                onClick={handleLogInWithGoogle}
                className='text-2xl'>
                <AiOutlineGoogle />
              </button>
            </div>
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
