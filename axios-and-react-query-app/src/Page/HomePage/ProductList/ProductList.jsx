import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import SingleProduct from './SingleProduct';
import { useState } from 'react';

const retridFetch = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=8`
  );

  return response.data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products', { page }],
    queryFn: retridFetch,
  });

  if (isLoading) {
    return (
      <div className='flex justify-center align-item-center'>
        <FadeLoader />
      </div>
    );
  }

  if (error) {
    return <p>Aucard Error is :{error.message}</p>;
  }

  return (
    <div className='my-10'>
      <h2 className='text-center text-3xl font-bold my-10 underline'>
        Product List
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        {products.data &&
          products?.data.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
            />
          ))}
      </div>

      <div className='flex justify-center items-center mt-5'>
        {products.prev && (
          <button
            className='pt-0 px-2 m-1 bg-gray-200 cursor-pointer border rounded-sm'
            onClick={() => setPage(products.prev)}>
            prev
          </button>
        )}
        {products.next && (
          <button
            className='pt-0 px-2 m-1 bg-gray-200 cursor-pointer border rounded-sm'
            onClick={() => setPage(products.next)}>
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
