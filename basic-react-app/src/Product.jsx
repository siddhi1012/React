import "./Product.css";

    function Product({ title, price, features={} }) {
    return (
        <div className="Product">
            <h3>Product Title : {title}</h3>
            <p>Product Price : {price}</p>
            <p>{features.a}</p>
        </div>
    );
}

export default Product;
