import React, { useContext } from "react";
import { PRODUCTS } from "../data/products";
import { LikeContext } from "../hook/LikeContext";
import Product from "../Components/common/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Wishlist() {
    const { likedItems = [] } = useContext(LikeContext);

    if (!likedItems?.length) {
        return(
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-12 bg-white rounded-3xl shadow-2xl">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                        <span className="text-3xl"><FontAwesomeIcon icon={"fa-solid fa-heart-circle-exclamation"}/></span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">No items to Wishlist</h2>
                    <p className="text-gray-500 mb-8">Choose products to Wishlist their features</p>
                    <Link to="/shop" className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-all" >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }
    return ( 
        <div className="flex flex-col items-center my-15">
            <p className="font-bold text-[30px] mb-4">List of likes</p>
            
           
                <div className="flex flex-row flex-wrap content-center justify-center items-center gap-6">
                    {PRODUCTS
                        .filter(product => likedItems.includes(product.id))
                        .map((product) => (
                            <Product key={product.id} data={product} />
                        ))}
                </div>
          
        </div> 
    );
}

export default Wishlist;