import { useEffect } from "react";


function ProductDetails({product, closeDetails}){

    useEffect(() => {
        const handleClickOutside = (event) => {
          const detailsContainer = document.querySelector(".productDetailsCont");
    
          if (detailsContainer && !detailsContainer.contains(event.target)) {
            closeDetails();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [closeDetails]);

    return(
        <div className="productDetailsCont ">
                <img src={`./${product.img01}.jpeg`} width='250px' height='180px' alt="img" className="productDetailPic"/>
                <span className="detailClose" onClick={closeDetails}>
                    &times;
                </span>
            <div>
                <h3>{product.name}</h3>
                <p className="detail-text">{product.description}</p>
            </div>

        </div>
    )
}

export default ProductDetails;