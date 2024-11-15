// import { Link, useLoaderData } from "react-router-dom";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const DetailsProduct = () => {
  const { id } = useParams();

  console.log(id);

  const retridFetch = async ({ queryKey }) => {
    const response = await axios.get(
      `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
    );
    return response.data;
  };

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products', id],
    queryFn: retridFetch,
  });

  console.log(product);

  if (isLoading)
    return (
      <div className='flex justify-center align-item-center'>
        <FadeLoader />
      </div>
    );

  if (error) return <div>Auckerd error: {error.message}</div>;

  const { image, title, price, rating, description } = product;

  //   use Loder use

  //   const data = useLoaderData();
  //   console.log(data);

  //   const { image, title, price, rating, description } = data;

  return (
    <div className='flex justify-center items-center my-10'>
      <div className='card bg-base-100 w-3/6 border '>
        <figure>
          <img
            className='w-56 h-56'
            src={image}
            alt='Shoes'
          />
        </figure>
        <div className='card-body justify-center items-center'>
          <h2 className='card-title text-center'>{title}</h2>
          <p className='text-xl font-semibold'>${price}</p>
          <p className='text-md font-bold'>Rating: {rating?.rate}</p>
          <p className='text-center'>{description}</p>
          <div className='flex flex-col  '>
            <button className='py-2 px-5 text-sm font-bold bg-purple-700 text-white rounded '>
              Buy Now
            </button>
            <Link to='/'>
              <button className=' mt-3 underline text-sm font-bold  text-gray-500  '>
                Go to home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
