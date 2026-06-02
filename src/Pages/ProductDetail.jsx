import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { HeartPlus, HeartMinus, ChevronRight } from "lucide-react";
import { ShopContext } from "../hook/shopContext";
import { LikeContext } from "../hook/LikeContext";
import { useContext } from "react";
import StarRating from "../Components/common/StarRating";
import IconFacebook from "../assets/images/SVG/akar-icons_facebook-fill.svg?react"
import IconLinkedin from "../assets/images/SVG/akar-icons_linkedin-box-fill.svg?react"
import ProductsCardsGrid from "../Components/common/ProductsCardsGrid";
import productImage01 from '../assets/images/productImage01.png';
import productImage02 from '../assets/images/productImage02.png';

const ProductDetail = () => {
    const { id } = useParams();
    const { cartItems, addToCart, increaseCount, decreaseCount } = useContext(ShopContext);
    const { toggleLike, isLiked } = useContext(LikeContext);
    
    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [activeTab, setActiveTab] = useState('description');

    const currentProductId = parseInt(id);
    const currentCartItem = cartItems.find(item => item.id === currentProductId);
    const isInCart = !!currentCartItem;

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProduct = PRODUCTS.find((p) => p.id === currentProductId);
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                NO product !!
            </div>
        );
    }

    const productLiked = isLiked(currentProductId);

    return (
        <>
            <div className="h-25 bg-gold-100 flex items-center gap-6 xl:pl-24.75">
                <Link to="/" className="text-[#9F9F9F]">Home</Link>
                <ChevronRight/>
                <Link to="/shop" className="text-[#9F9F9F]">Shop</Link>
                <ChevronRight/>
                <p className="border-l py-1 pl-8.5">{product.productName}</p>
            </div>

            <div className="mt-8 flex justify-between px-24.75 pb-13.75 pt-8.75">
                <div className="flex gap-8">
                    <div className="w-19 gap-8">
                        <img src={product.productImage} alt="" className="mb-8 rounded-[10px]"/>
                        <img src={product.productImage} alt="" className="mb-8 rounded-[10px]"/>
                        <img src={product.productImage} alt="" className="rounded-[10px]"/>
                    </div>
                    <img src={product.productImage} alt="" className="h-125 w-105.75 rounded-[10px]"/>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-[42px]">{product.productName}</h1>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleLike(currentProductId);
                            }}
                            className="flex items-center h-fit gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition-all"
                        >
                            {productLiked ? (
                                <HeartMinus size={20} strokeWidth={2} color="#f50000" />
                            ) : (
                                <HeartPlus size={20} strokeWidth={2} />
                            )}
                            <span className="text-sm font-medium">
                                {productLiked ? "Unlike" : "Like"}
                            </span>
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-medium text-slate text-gray-900">Rp {product.prise}</span>
                        {product.discount && (
                            <span className="text-xl text-gray-500 line-through">Rp {product.discount}</span>
                        )}
                        {product.discount2 && (
                            <span className="px-4 py-2 bg-red-100 text-red-600 text-lg font-bold rounded-full">-{product.discount2}%</span>
                        )}
                    </div>

                    <StarRating rating={product.rating} className="text-[20px] font-bold" />

                    <p className="w-129.25">{product.description}</p>

                    {product.size?.length > 0 && (
                        <div>
                            <p className="text-gray mb-3">Size</p>
                            <div className="flex gap-4 text-[13px]">
                                {product.size.map((item, index) => {
                                    const isActiveSize = selectedSize === item;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedSize(item)}
                                            className={`h-7.5 w-7.5 rounded-[5px] ${
                                                isActiveSize ? "text-white bg-gold" : "text-black bg-gold-100"
                                            } hover:scale-110`}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {product.color?.length > 0 && (
                        <div>
                            <p className="text-gray mb-3">Color</p>
                            <div className="flex gap-4">
                                {product.color.map((item, index) => {
                                    const isActive = selectedColor === item;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedColor(item)}
                                            style={{ backgroundColor: item }}
                                            className={`h-7.5 w-7.5 rounded-full transition ${
                                                isActive
                                                    ? "scale-110 border-2 border-orange-700"
                                                    : "border-gray-300"
                                            } hover:scale-110`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div className="flex gap-2.5 mt-4 items-center">
                        <div className="flex w-50 h-16 items-center bg-white border-2 border-gray-200 rounded-xl p-2">
                            <button
                                onClick={() => {
                                    if (currentCartItem) {
                                        decreaseCount(currentProductId);
                                    }
                                }}
                                className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-xl transition-all"
                            >
                                -
                            </button>
                            <span className="w-16 text-center text-xl font-bold mx-4">
                                {currentCartItem ? currentCartItem.count : 0}
                            </span>
                            <button
                                onClick={() => {
                                    if (currentCartItem) {
                                        increaseCount(currentProductId);
                                    } else {
                                        addToCart(currentProductId);
                                    }
                                }}
                                className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-xl transition-all"
                            >
                                +
                            </button>
                        </div>
                        <button 
                            className="border h-16 w-53.75 rounded-[15px]"
                            onClick={() => addToCart(currentProductId)}
                        >
                            {isInCart ? "Remove from cart" : "Add to cart"}
                        </button>
                        <button className="h-16 w-53.75 rounded-[15px] border border-gray-300 hover:bg-gray-50">
                            + Compare
                        </button>
                    </div>

                    <div className="border-t border-gray-300 text-gray mt-11 w-full">
                        <table className="w-full mt-10.25">
                            <tbody className="divide-gray-200">
                                <tr>
                                    <td className="py-1.5 pr-8 align-top w-28">SKU</td>
                                    <td className="pr-4.5">:</td>
                                    <td>{product.SKU}</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 pr-8 align-top">Category</td>
                                    <td className="pr-4.5">:</td>
                                    <td>
                                        {product.category?.map((item, index) => (
                                            <span key={index}>
                                                {item}
                                                {index < product.category.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 pr-8 align-top">Tags</td>
                                    <td className="pr-4.5">:</td>
                                    <td>
                                        {product.tags?.map((item, index) => (
                                            <span key={index}>
                                                {item}
                                                {index < product.tags.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 align-top">Share</td>
                                    <td className="pr-4.5">:</td>
                                    <td className="pt-2.5 flex gap-3">
                                        <IconFacebook/>
                                        <IconLinkedin/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="border-y border-gray-300 w-full pb-16.25 pt-12">
                <div className="text-[24px] font-medium gap-13 flex justify-center">
                    <button
                        onClick={() => setActiveTab('description')}
                        className={`px-6 py-3 font-medium transition-all ${
                            activeTab === 'description' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('information')}
                        className={`px-6 py-3 font-medium transition-all ${
                            activeTab === 'information' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Additional Information
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`px-6 py-3 font-medium transition-all ${
                            activeTab === 'reviews' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Reviews [5]
                    </button>
                </div>

                <div className="pt-6 mx-51.75">
                    {activeTab === 'description' && (
                        <div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {product.description}
                            </p>
                            <div className="flex justify-center gap-7.25 mt-9">
                                <img src={productImage01} alt="#" />
                                <img src={productImage02} alt="#" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'information' && (
                        <div>
                            <div className="grid grid-cols-2 gap-8 text-lg">
                                <div>
                                    <p><span className="font-semibold">SKU:</span> {product.SKU}</p>
                                    <p><span className="font-semibold">Category:</span> {product.category?.join(', ')}</p>
                                    <p><span className="font-semibold">Stock:</span> {product.StockQuantity}</p>
                                </div>
                                <div>
                                    <p><span className="font-semibold">Size:</span> {product.size?.join(', ')}</p>
                                    <p><span className="font-semibold">Color:</span> {product.color?.length} colors</p>
                                    <p><span className="font-semibold">Rating:</span> {product.rating}/5</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Reviews ({product.rating * 10})</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <StarRating rating={product.rating} />
                                <span className="text-xl font-bold">{product.rating}</span>
                            </div>
                            <p className="text-gray-500 italic">
                                No reviews yet. Be the first to review this product!
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <ProductsCardsGrid nameH1="Related Products" initialLimit={4} maxLimit={12}/>
            </div>
        </>
    );
};

export default ProductDetail;