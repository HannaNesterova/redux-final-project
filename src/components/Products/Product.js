import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";



function Product({product}){

    const [details, setDetails] = useState(false);
    const[quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const moreDetails=()=>{
        setDetails(true);
    }

    const closeDetails = () => {
        setDetails(false);
    }

    return(
        <div className="product-box">
            <img src={`./${product.img}.jpeg`} width='400px' height='250px' alt="img"/>
            <p> {product.name}</p>
            <div className="product-price">
                <span className={product.pastPrice ? 'previusPrice' : ''}> {product.pastPrice} </span>
                <span>$ {product.actualPrice}</span>
            </div>
            <div className="product-buttons">
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="product-btn" onClick={() => dispatch(addItemToCart({product, quantity, img:product.img}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 576 512"><path fill="#ab9873" d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                </button>
                <button className="more-btn" onClick={moreDetails}>
                    more
                </button>
                {details && (
                    <ProductDetails product={product} closeDetails={closeDetails}/>
                )}
            </div>
        </div>
    )
}

export default Product;