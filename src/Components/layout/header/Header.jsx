import IconNav from "./IconNav";
import Logo from "./Logo";
import * as Dialog from '@radix-ui/react-dialog';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import Navigation from "../../common/Navigation";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header id="header" className="pz-[100px] py-2.5 bg-[#ffffff29] backdrop-blur-lg sticky top-0 z-1000 shadow-md max-w-full" >
            {/* دسکتاپ */}
            <div id="laptop" className="hidden xl:flex xl:px-5 2xl:px-25 flex-row items-center justify-between w-full h-15 text-black">
                <Logo/>
                <nav>
                    <ul className="flex flex-2 justify-center list-none">

                        <Navigation className="2xl:mx-[37.5px] xl:mx-5"/>
           
                    </ul>
                </nav>
                <IconNav/>
            </div>
            
            {/* موبایل */}
            <div id="mobile" className="flex flex-row justify-between items-center xl:hidden px-4 h-10" >
                <Logo/>
                <div className="hidden lg:flex xl:hidden">
                    <IconNav/>
                </div>
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <button aria-label="باز کردن منو" className="relative w-8 h-6 flex flex-col justify-between items-center">
                            <span className={`block w-8 h-0.75 bg-black transition-all duration-300 ${ open ? "rotate-45 translate-y-2 mt-1.25" : "" }`}/>
                            <span className={`block w-8 h-0.75 bg-black transition-all duration-300 ${ open ? "opacity-0" : "" }`}/>
                            <span className={`block w-8 h-0.75 bg-black transition-all duration-300 ${ open ? "-rotate-45 -translate-y-2" : ""}`}/>
                        </button>
                    </Dialog.Trigger>
                    <MobileMenu onClose={() => setOpen(false)} />
                </Dialog.Root>
            </div>
        </header>
    );
}

export default Header;