import Product from "./Product.jsx";
import  Activity  from "./Activity.jsx";
function ProductTab() {
    let options = ["fast","durable"];
  return (
    <>
      <Product title="phone" price={36000} features={options} />
      <Product title="laptop" price={50000} />
      <Product title="ipad" price={150000} />
    </>
  );
}

export default ProductTab;
