import { products } from "../data";
import Product from "./Product";

const LatestProducts = () => {
  return (
    <div className="w-full my-8 md:flex md:items-center flex-col text-center items-center justify-between px-2">
      <div className="custom-md:text-3xl md:w-full lg:text-start text-2xl font-semibold text-primary mx-5 mb-8">
        OUR PRODUCTS
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.slice(0, 4).map(({ img, title, price, salePrice }) => (
          <Product
            img={img}
            title={title}
            price={price}
            salePrice={salePrice}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
