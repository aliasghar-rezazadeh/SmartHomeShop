import { useState } from "react"
import { PRODUCTS } from '../data/products'

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) => {
        const existingItem = cartItems.find((item) => item.id === itemId);
        if (!existingItem) {
            const product = PRODUCTS.find(p => p.id === itemId);
            setCartItems([...cartItems, { 
                id: itemId, 
                count: 1, 
                product
            }]);
        } else {
            setCartItems(cartItems.map((item) => 
                item.id === itemId 
                    ? { ...item, count: item.count + 1 }
                    : item
            ));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const increaseCount = (itemId) => {
        setCartItems(prev => prev.map((item) => 
            item.id === itemId 
                ? { ...item, count: item.count + 1 }
                : item
        ));
    };

    const decreaseCount = (itemId) => {
        setCartItems(prev => 
            prev
                .map(item =>
                    item.id === itemId 
                        ? { ...item, count: item.count - 1 } 
                        : item
                )
                .filter(item => item.count > 0)
        );
    };

    return { 
        cartItems, 
        addToCart, 
        removeFromCart,
        increaseCount,
        decreaseCount
    };
};
//طریفه استفاده 
//ایمپورت ها
// import { useState, useContext } from "react";
// import { ShopContext } from "../../hook/shopContext";
//بیرون از ریترن فانکشن
// const { cartItems, addToCart } = useContext(ShopContext);
// const isInCart = cartItems?.some((item) => item.id === id);
//در داخل ریترن فانکشن
// <button className="Action_Buttun text-custom-main bg-white text-base-medium w-47.5 h-12 cursor-pointer mb-9 border-none font-poppins font-bold">
//     <span onClick={(e) => {
//         e.preventDefault(); 
//         e.stopPropagation(); 
//         addToCart(id);
//     }}>
//         {isInCart ? "Remove from cart" : "Add to cart"}
//     </span>
// </button>

//افزایش و کاهش در سبد خرید
// const { cartItems, increaseCount, decreaseCount } = useContext(ShopContext);

// {cartItems.map(item => (
//     <div key={item.id}>
//         <span>{item.count}</span>
//         <button onClick={() => increaseCount(item.id)}>+</button>
//         <button onClick={() => decreaseCount(item.id)}>-</button>
//     </div>
// ))}