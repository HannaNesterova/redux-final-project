import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div >
          <p className='empty-cart'>Your cart is empty!</p>
          <Link to='/main'>
            <button className="btn-log">Go back</button>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((product) => (
            <CartItems key={product.id} product={product} />
          ))}
          <div className="total-price">
            <h3>Total:</h3>
            <h3>$ {(totalPrice).toFixed(2)}</h3>
          </div>
          <Link to='/main'>
            <button className="btn-log">Go back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
