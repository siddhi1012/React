import "./Product.css";

function Product({ title, price, features = [] }) {
    let isDiscount = price > 80000;
    const styles = { backgroundColor: isDiscount ? "grey" : null };
    return (
        <div className="Product" style={styles}>
            <h3>Product Title : {title}</h3>
            <p>Product Price : {price}</p>
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
            {isDiscount && <p>Discount of 5 %</p>}
        </div>
    );
}

export default Product;
