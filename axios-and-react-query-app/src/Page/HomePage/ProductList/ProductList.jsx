import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import SingleProduct from "./SingleProduct";

const retridFetch = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey}`);

  return response.data;
};

const ProductList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: retridFetch,
  });

  console.log(data, error, isLoading);
  if (isLoading) {
    <FadeLoader />;
  }

  if (error) {
    <p>{error.message}</p>;
  }

  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-bold my-10 underline">
        Product List
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {data?.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
