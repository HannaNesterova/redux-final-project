import { useDispatch } from 'react-redux';
import {dataProduct} from '../Products/dataProduct';
import { removeItemFromCart } from '../../redux/cartSlice';

function CartItems({product}) {

    const dispatch = useDispatch();
    const item = dataProduct.find(item => item.id === product.productId);

    return(
        <div className="cart-item-box">
            <div className="item-box-container">
                <div>
                    <p>Portion(s): {product.quantity} </p>
                    <span>Total price: $ {(item.actualPrice * product.quantity).toFixed(2)}</span>
                </div>
                <div>
                    <button onClick={() => dispatch(removeItemFromCart({cartItemId: product.id}))}> DELETE</button>
                </div>
                <div>
                    <h3>{item.name}</h3>
                </div>
                <div>
                <img src={`./${product.img}.jpeg`} alt="pic" width='200px' height='150px' />
                </div>
            </div>
        </div>
    )
}

export default CartItems;