const Product = ({
  img,
  title,
  price,
  salePrice,
}: {
  img: string;
  title: string;
  price: string;
  salePrice: string;
}) => {
  return (
    <div className="space-y-2 flex flex-col md:items-start items-center">
      <div className="w-[250px] h-[250px] object-cover border-[3px] border-primary">
        <img src={img} alt="Product" className="w-full h-full p-3" />
      </div>
      <div className="text-2xl font-semibold text-start">{title}</div>
      <div className="text-xl flex font-semibold">
        <div className="mr-5">{salePrice}</div>
        <div className="line-through text-gray-400">{price}</div>
      </div>
    </div>
  );
};

export default Product;
