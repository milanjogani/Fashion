import React, { useEffect, useState } from 'react'
import { useCart } from '../../CartProvider ';  // Import the Cart context
import { jacket } from "./jacket"
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  };


const Jacketcollection = () => {
    useScrollToTop()
     const { addToCart } = useCart();

      // State for filter checkboxes
         const [inStock, setInStock] = useState(false);
         const [outStock, setOutStock] = useState(false);
     
         // Filtered products based on stock availability
         const filteredProductsjacket = jacket.filter((product) => {
             if (inStock && !outStock) {
                 return product.stock === "inStock";  // Assuming your products have a 'stock' property
             }
             if (!inStock && outStock) {
                 return product.stock === "outStock";
             }
             return true;  // If both are unchecked, show all products
         });



    let cartbtn = {
        // border: "none",
        border: "1px solid #E3FC01",
        display: "block",
        width: "100%",
        color: "#E3FC01",
        padding: "10px 0"
    }
  return (
    <>
        <div className="ProductOuter container-fluid">
                        <div className="ProductInner row d-flex">
                            <div className="LeftSide col-lg-3 col-sm-12 col-md-12">
                                <h2 className="fw-bold fs-1">Products</h2>
        
                                <div className="filter pt-5">
                                    <span className="fs-3">Filter</span>
                                    <hr />
                                    <p className="fs-3">Availability</p>
                                    <label htmlFor="stock" className="fs-5">
                                        <input type="checkbox"  checked={inStock} 
                                onChange={() => setInStock(!inStock)} /><span className="ps-2">in stock</span>
                                    </label> <br />
                                    <label htmlFor="outstock" className="fs-5">
                                        <input type="checkbox" checked={outStock} 
                                onChange={() => setOutStock(!outStock)} /><span className="ps-2">out of stock</span>
                                    </label>
        
                                </div>
                            </div>
        
                            <div className="RightSide col-lg-9 col-md-12 col-sm-12 d-flex row">
                                {filteredProductsjacket.map((product) => (
                                    <div key={product.id} className="rightInner col-lg-3 col-sm-12 col-md-6 col-12 lh-lg pt-5">
                                        <img height={400} style={{ width: "100%" }} src={product.image} alt=''/>
                                        <h3>{product.name}</h3>
                                        <del>{product.del}</del>
                                        <span className="ps-2 fs-5 fw-bolder">{product.price}</span>
                                        <button onClick={() => addToCart(product)} style={cartbtn}>Add To Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Jacketcollection