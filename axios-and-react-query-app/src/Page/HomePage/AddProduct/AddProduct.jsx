import { QueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  const queryClient = new QueryClient();
  const [state, setState] = useState({
    id: '',
    title: '',
    price: '',
    rating: 5,
    description: '',
    image: '',
  });

  const mutetion = useMutation({
    mutationFn: (newProuct) =>
      axios.post(`http://localhost:3000/products`, newProuct),
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutetion.mutate(newData);
  };

  const handleOnChange = () => {
    const name = event.target.name;
    const value =
      event.target.type === 'number'
        ? event.target.valueAsNumber
        : event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className='flex  items-center justify-center  p-4 text-white   '>
      <div className='w-full max-w-md rounded-lg bg-gray-800 shadow-xl'>
        <div className='p-6'>
          <h2 className='mb-6 text-2xl font-bold text-green-400'>
            Add Product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='taskName'
                className='mb-1 block text-sm font-medium text-gray-300'>
                Product Name
              </label>
              <input
                type='text'
                id='taskName'
                name='title'
                value={state.title}
                onChange={handleOnChange}
                required
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='mb-1 block text-sm font-medium text-gray-300'>
                Description
              </label>
              <textarea
                id='description'
                name='description'
                rows='3'
                value={state.description}
                onChange={handleOnChange}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'></textarea>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='dueDate'
                className='mb-1 block text-sm font-medium text-gray-300'>
                Price
              </label>
              <input
                type='number'
                id='number'
                name='price'
                value={state.price}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='dueDate'
                className='mb-1 block text-sm font-medium text-gray-300'>
                Rating
              </label>
              <input
                type='number'
                id='number'
                name='rating'
                value={state.rating}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                onChange={handleOnChange}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='dueDate'
                className='mb-1 block text-sm font-medium text-gray-300'>
                Image
              </label>
              <input
                type='text'
                id='imgage'
                name='image'
                value={state.image}
                className='w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
                onChange={handleOnChange}
              />
            </div>

            <button
              type='submit'
              className='rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800'>
              Add Product
            </button>
          </form>
        </div>
        <div>
          <Link to='/'>
            <p className='mt-5 text-center text-gray-500 text-lg'>Go to home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
