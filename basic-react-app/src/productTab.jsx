import Product from "./Product.jsx";

function ProductTab() {
  return (
    <>
      <Product title="phone" price={36000} features={{a:"fast", b: "durable"}} />
      <Product title="laptop" price={50000} />
      <Product title="ipad" price={150000} />
    </>
  );
}

export default ProductTab;
