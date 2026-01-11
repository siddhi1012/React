import "./Product.css";

function Product({ title, price, features = [] }) {
   
    return (
        <div className="Product">
            <h3>Product Title : {title}</h3>
            <p>Product Price : {price}</p>
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
            <p>{ price > 80000 ? " Discount of 5 %" : null;}</p>
        </div>
    );
}

export default Product;
