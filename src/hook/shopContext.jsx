import { createContext } from "react";
import { useCart } from "./useCart";
export const ShopContext = createContext({
    cartItems: null,
    addToCart: () => {},
    removeFromCart: () => {},
    increaseCount: () => {},
    decreaseCount: () => {},
});
export const ShopContextProvider = (props) => {
    return (
        <ShopContext.Provider value={useCart()}>
            {props.children}
        </ShopContext.Provider>
    );
};