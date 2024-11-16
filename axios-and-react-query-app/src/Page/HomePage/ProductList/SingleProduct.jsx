import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const deleteProduct = async (productId) => {
  const response = await axios.delete(
    `http://localhost:3000/products/${productId}`
  );
  return response.data;
};

const SingleProduct = ({ product }) => {
  const { id, title, description, price, rating, image } = product;
  const queryClient = useQueryClient();

  const deleteMutetion = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleDelete = (productId) => {
    deleteMutetion.mutate(productId);
    console.log(productId);
  };

  return (
    <div className='card bg-base-100 w-80 border '>
      <figure>
        <img
          className='w-56 h-56'
          src={image}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <Link to={`/detailsProduct/${id}`}>
          <h2 className='card-title'>{title.slice(0, 20)}</h2>
          <p className='text-xl font-semibold'>${price}</p>
          <p className='text-md font-bold'>Rating: {rating.rate}</p>
          <p>{description.slice(0, 90)}</p>
        </Link>
        <div className='flex justify-between gap-4 mt-8'>
          <button className='py-2 px-5 text-sm font-bold bg-purple-700 text-white rounded '>
            Buy Now
          </button>
          <button
            onClick={() => handleDelete(product.id)}
            className='py-2 px-5 text-sm font-bold bg-purple-700 text-white rounded '>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
