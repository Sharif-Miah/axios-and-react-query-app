import Hero from "../../component/Hero/Hero";
import ProductList from "./ProductList/ProductList";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <section>
        <Hero />
        <ProductList />
      </section>
    </main>
  );
};

export default Home;
