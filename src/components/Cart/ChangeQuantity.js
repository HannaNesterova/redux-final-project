
function ChangeQuantity({quantity, setQuantity}){

const addQuantity = () => {
    const newQuantity = quantity++;
    setQuantity(newQuantity);
}

const removeQuantity =() => {
    if (quantity > 1) {
        const newQuantity = --quantity;
        setQuantity(newQuantity);
    }
} 

    return(
        <div>
        <div className="quantityOfAmounght">
            <button onClick={addQuantity}>+</button>
            <p>{quantity}</p>
            <button onClick={removeQuantity}>-</button>
        </div>
        </div>
    )
}

export default ChangeQuantity;