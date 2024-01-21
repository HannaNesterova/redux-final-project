import {Link} from "react-router-dom";

function CartItems() {
    return(
        <div className="cart-item-box">
            <div className="item-box-container">
                <div>
                    <p>Quantity :</p>
                    <h3>Total price:</h3>
                </div>
                <div>
                    <button> DELETE</button>
                </div>
                <div>
                    <h3>Name of product</h3>
                </div>
                <div>
                    <img alt="pic"/>
                </div>
            </div>
            <div className="total-price">
                <p>Total:</p>
                <p>0 $</p>
            </div>
        <Link to='/main'>
            <button className="btn-log">GO back</button>
        </Link>
        </div>
    )
}

export default CartItems;