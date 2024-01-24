import { useEffect, useRef } from "react";


function ProductDetails({product, closeDetails}){

  const detailsContainerRef = useRef();
  console.log(detailsContainerRef)

    useEffect(() => {
        const handleClickOutside = (event) => {
          
    
          if (detailsContainerRef.current && !detailsContainerRef.current.contains(event.target)) {
            closeDetails();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [closeDetails]); 

    return(
        <div className="productDetailsCont " ref={detailsContainerRef}>
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