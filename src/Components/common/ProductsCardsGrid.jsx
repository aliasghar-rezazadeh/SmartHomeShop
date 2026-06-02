import { useState } from 'react';
import Product from './Product';
import { PRODUCTS } from '../../data/products';
export const ProductsCardsGrid = ({nameH1 = "Our Products", initialLimit = 8, maxLimit = 20}) => {
    const [displayCount, setDisplayCount] = useState(initialLimit);
    const handleShowMore = () => {
        setDisplayCount(prev => Math.min(prev + 4, maxLimit));  //  +4 تا، حداکثر maxLimit
    };
    const limitedProducts = PRODUCTS.slice(0, displayCount);
    const hasMore = displayCount < PRODUCTS.length && displayCount < maxLimit;
    return (
        <div className="flex flex-col items-center my-15 2xl:px-25.5">
            <p className="font-bold text-[30px] mb-4">{nameH1}</p>
            <div className="flex flex-row flex-wrap content-center justify-center items-center 2xl:grid 2xl:grid-cols-4 2xl:gap-1.5">
                {limitedProducts.map((productData) => (
                    <Product key={productData.id} data={productData}/>
                ))}
            </div>    
            {hasMore && (
                <button 
                    onClick={handleShowMore}
                    className="Action_Buttun text-base-medium w-61.25 h-15 text-custom-main bg-white mt-4 border-2 border-custom-main hover:bg-custom-main hover:text-white hover:border-none transition-all"
                >
                    <span>Show More ({PRODUCTS.length - displayCount} left)</span>
                </button>
            )}
            {!hasMore && displayCount >= PRODUCTS.length && (
                <p className="text-gray-500 mt-4">All products loaded.!!</p>
            )}
        </div>
    );
};

export default ProductsCardsGrid;