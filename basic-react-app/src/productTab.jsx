import Product from "./Product.jsx";
function productTab() {
    let  option = ["fast","reliable","hi-tech"];
    let option2 = {a:"fast", b:"reliable"};
    return (
        <>
            <Product title="phone" price="36000" features={option}></Product>
            <Product title="laptop" price="50000" features2={option2}></Product>
            <Product title="ipad" price="150000"></Product>
        </>
    );
}

export default productTab;