import Products from "../Products/Products";

function Main(){
    return(
        <div>
            <h1 className="main-title">All Delicious Products</h1>
            <div className="main-filter-btn">
                <button>bread</button>
                <button>baguette</button>
                <button>buns</button>
                <button>cookies</button>
                <button>doughnut</button>
                <button>muffin</button>
            </div>
        <div>
            <Products />
        </div>
        </div>
    )
}

export default Main;