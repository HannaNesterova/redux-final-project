import { useSelector } from "react-redux";
import Product from "./Product";
import { dataProduct } from "./dataProduct";
import { getSelectedCategory } from "../../redux/searchSlice";


function Products(){
    const selectedCategory = useSelector(getSelectedCategory)

    return(
        <div className="products-container">
            {dataProduct
            .filter(product => {
                if(selectedCategory === 'all'){
                    return true;
                }
                return selectedCategory === product.category;
            } )
            .map((product, id) => <Product key={id} product={product}/>)}
        </div>
    )
}

export default Products;