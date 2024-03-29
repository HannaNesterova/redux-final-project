
import Products from "../Products/Products";
import Filter from '../Search/Filter';

function Main(){
    
    return(
        <div>
            <h1 className="main-title">All Delicious Products</h1>
            {['sweet, salt, all'].map((category) => <Filter key={category.id} category ={category}/>)}
   
        <div>
            <Products />
        </div>
        </div>
    )
}

export default Main;