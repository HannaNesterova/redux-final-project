import Product from "./Product";
import { dataProduct } from "./dataProduct";


function Products(){

    return(
        <div className="products-container">
            {dataProduct.map((product, id) => <Product key={id} product={product}/>)}
        </div>
    )
}

export default Products;