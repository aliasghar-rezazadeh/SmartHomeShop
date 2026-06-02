import { useState, useContext } from "react";
import StarRating from "./StarRating";
import { HeartPlus, HeartMinus, ArrowRightLeft, Share2 ,CheckLine } from 'lucide-react'; 
import { Link } from "react-router-dom";
import { ShopContext } from "../../hook/shopContext";
import { LikeContext } from "../../hook/LikeContext";
import { CompareContext } from "../../hook/CompareContext";
const Product = (props) => {
    if (!props?.data) return null;   
    const { id, productName, SortDescription, productImage, Category, description, prise, discount, discount2, status, rating, StockQuantity } = props.data;  
    const { cartItems, addToCart } = useContext(ShopContext);
    const isInCart = cartItems?.some((item) => item.id === id);
    const { toggleLike, isLiked } = useContext(LikeContext);
    const productLike = isLiked(id);
    const { addToCompare, compareItems = [] } = useContext(CompareContext);
    const isInCompare = compareItems?.some(item => item.id === id);
    return (
        <div className="rounded-[5px] m-4 bg-[#F4F5F7] w-71.25 relative overflow-hidden cursor-pointer group">
            <img className="w-full h-75.25 block" src={productImage} alt="#"/>                 
            <div className="absolute top-0 left-0 w-full h-75.25 bg-[#3c3c3c9b] flex flex-col items-center justify-center opacity-0 transition-opacity delay-200 group-hover:opacity-100 duration-200">
                <button className="Action_Buttun text-custom-main bg-white text-base-medium w-47.5 h-12 cursor-pointer mb-9 border-none font-poppins font-bold">
                    <span onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation(); 
                        addToCart(id);
                    }}>
                        {isInCart ? "Remove from cart" : "Add to cart"}
                    </span>
                </button>
                <div className="flex gap-3 text-white">   
                    <button 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        className="menu-a text-[12px] text-white cursor-pointer font-poppins flex gap-1 p-2 rounded hover:bg-white/20"
                    >
                        <Share2 size={20} strokeWidth={2}/>
                        <span className="mt-0.5 mx-0.5 mb-0.5">Share</span>
                    </button>
                    <button 
                        onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            addToCompare(id, props.data); 
                        }}
                        className="menu-a text-[12px] text-white cursor-pointer font-poppins flex gap-1 p-2 rounded hover:bg-white/20"
                    >
                        {isInCompare ? <CheckLine size={20} strokeWidth={2}/> : <ArrowRightLeft size={20} strokeWidth={2} />}
                        <span className="mt-0.5 mx-0.5 mb-0.5">
                            Compare
                        </span>
                    </button>
                    <button 
                        onClick={(e) => {
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            toggleLike(id);
                        }} 
                        className="text-[12px] text-white cursor-pointer font-poppins flex gap-1 menu-a p-2 rounded hover:bg-white/20"
                    >
                        {productLike ? (
                            <HeartMinus size={20} strokeWidth={2} color="#f50000"/>
                        ) : (
                            <HeartPlus size={20} strokeWidth={2} />
                        )}
                        <span className="mt-0.5 mx-0.5 mb-0.5">
                            {productLike ? "Unlike" : "Like"}
                        </span> 
                    </button>
                </div>
            </div>
            {status && <span className="text-base-medium absolute top-2.5 right-2.5 bg-[#2EC1AC] text-white rounded-[12%] p-1.75 font-poppins opacity-100 group-hover:opacity-0 transition-opacity duration-300">{status}</span>}
            {discount2 && <span className="text-base-medium absolute h-fit top-2.5 left-2.5 bg-[#E97171] text-white rounded-full p-1.75 font-poppins opacity-100 group-hover:opacity-0 transition-opacity duration-300">-{discount2}%</span>}
            <Link to={`/product/${id}`} className="block">
                <div className="pt-4 pb-7.5 px-4 flex flex-col flex-wrap items-stretch text-black">
                    <p className="text-[24px] w-fit mb-2 font-bold menu-a">{productName}</p>
                    <div className="mt-0.75 mx-0 mb-3.75">
                        <span className="text-gray-400 text-base-medium">{SortDescription}</span>
                    </div>
                    <StarRating rating={rating} className = "text-[20px] font-bold"/>
                    <p className="flex flex-row justify-between">
                        <span className="font-semibold text-[20px]">Rp{prise}</span>
                        {discount && <span className="line-through text-gray-600 text-base-medium">Rp{discount}</span>}
                    </p>
                </div>
            </Link>
        </div> 
    );
};
export default Product;