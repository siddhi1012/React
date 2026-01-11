import "./Product.css";

function Product({ title, price, features, features2 }) {
    console.log(features);
    return (
        <div className="Product">
            <h3>Product Title : {title}</h3>
            <p>Product Price : {price}</p>
            <p>features : {features}</p>
            <p>features : {features2}</p>

        </div>
    );
}

export default Product;