import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { id, title, description, price, rating, image } = product;

  return (
    <div className="card bg-base-100 w-80 border">
      <figure>
        <img className="w-56 h-56" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title.slice(0, 20)}</h2>
        <p className="text-xl font-semibold">${price}</p>
        <p className="text-md font-bold">Rating: {rating.rate}</p>
        <p>{description.slice(0, 100)}</p>
        <div className="flex justify-between gap-4 ">
          <button className="py-2 px-5 text-sm font-bold bg-purple-700 text-white rounded ">
            Buy Now
          </button>
          <Link to={`/detailsProduct/${id}`}>
            <button className="py-2 text-sm font-bold px-5 bg-purple-700 text-white rounded ">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
