import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { X, User, Search, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../common/Navigation';

const MobileMenu = ({ isOpen, onClose }) => {

    const iconItems = [
        { label: 'User', href: '/', icon: <User /> },
        { label: 'Search', href: '/', icon: <Search /> },
        { label: 'Wishlist', href: '/wishlist', icon: <Heart /> },
        { label: 'Shop', href: '/store', icon: <ShoppingCart /> },
    ];

    return (
        <Dialog.Portal>
            <Dialog.Overlay/>


            <Dialog.Content className="fixed top-0 right-0 w-full  z-50 p-4 bg-white">
                <Dialog.Title className="sr-only">mobile menu</Dialog.Title>
                <Dialog.Description className="sr-only">
                   Here is a list of navigation links and useful icons for the mobile menu.
                </Dialog.Description>

                
                <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-label="بستن منو">
                        <X size={24} />
                    </button>
                </Dialog.Close>

                
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center mt-11.25 p-2.5"
                >
                    <Navigation className="py-2 border-b border-gray-100 w-full"/>
                    <div className="mt-4 flex justify-between gap-12 lg:hidden">
                        {iconItems.map((item) => (
                            <Link key={item.label} to={item.href} className="text-gray-500" onClick={() => { onClose(); }} aria-label={item.label}>
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </motion.ul>
            </Dialog.Content>
        </Dialog.Portal>
    );
};

export default MobileMenu;