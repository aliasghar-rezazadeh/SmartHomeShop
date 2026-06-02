import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { User, Search, Heart, ShoppingCart, X ,ArrowRightLeft } from 'lucide-react'; 
import { ShopContext } from '../../../hook/shopContext';
import { CompareContext } from '../../../hook/CompareContext';
function IconsNave() {
    const { cartItems = [], removeFromCart, decreaseCount } = useContext(ShopContext);
    const { compareItems = [] } = useContext(CompareContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null);
    const compareCount = compareItems.length
    const itemCount = cartItems.reduce((prev, current) => {
        return prev + (current.count || 0);
    }, 0);


    const totalPrice = cartItems.reduce((sum, item) => {
        const priseValue = parseInt(item.product?.prise?.replace(/[^\d]/g, '')) || 0;
        return sum + priseValue * (item.count || 1);
    }, 0);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="relative" ref={cartRef}>
            <ul className="flex items-center xl:gap-2 2xl:gap-4">
                <li>
                    <Link to="/" className="p-2 text-gray-600 hover:text-blue-600 rounded-md transition-colors">
                        <User strokeWidth={1.5} />
                    </Link>
                </li>
                <li>
                    <Link to="/" className="p-2 text-gray-600 hover:text-blue-600 rounded-md transition-colors">
                        <Search strokeWidth={1.5} />
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist" className="p-2 text-gray-600 hover:text-blue-600 rounded-md transition-colors">
                        <Heart strokeWidth={1.5} />
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/compare" className="text-gray-600 hover:text-blue-600 rounded-md flex items-center relative transition-colors">
                        <ArrowRightLeft strokeWidth={1.5} />
                        {compareCount > 0 && (
                            <span className="absolute -right-3 -top-3 h-5 w-5 rounded-full bg-orange-500 text-xs font-bold text-white flex items-center justify-center min-w-5">
                                {compareCount}
                            </span>
                        )}
                    </Link>
                </li>
                <li className="relative">
                    <button onClick={toggleCart} className="text-gray-600 hover:text-blue-600 rounded-md flex items-center relative transition-colors">
                        <ShoppingCart strokeWidth={1.5} />
                        {itemCount > 0 && (
                            <span className="absolute -right-3 -top-3 h-5 w-5 rounded-full bg-red-500 text-xs font-bold text-white flex items-center justify-center min-w-5">
                                {itemCount}
                            </span>
                        )}
                    </button>

                    {isCartOpen && (
                        <div className="absolute right-0 top-full mt-2 w-104.25 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900">Shopping Cart</h3>
                                <button onClick={toggleCart} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="max-h-80 overflow-y-auto p-4">
                                {cartItems.length === 0 ? (
                                    <p className="text-center text-gray-500 py-8">Shopping cart is empty.</p>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 rounded-lg">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                                                <img src={item.product?.productImage} alt={item.product?.productName} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm text-gray-900 truncate">{item.product?.productName}</h4>
                                                <p className="text-sm font-bold text-gray-900">
                                                    {item.count} × Rp {item.product?.prise}
                                                </p>
                                            </div>
                                            <button onClick={() => decreaseCount(item.id)} className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-all">
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-lg font-bold">Total: Rp {totalPrice.toLocaleString()}</span>
                                </div>
                                <Link to="/ShoppingCart" onClick={toggleCart} className="block w-full bg-linear-to-r from-yellow-500 to-yellow-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default IconsNave;