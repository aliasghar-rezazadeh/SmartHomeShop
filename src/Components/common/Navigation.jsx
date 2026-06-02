import { Link } from "react-router-dom";
import '../../template/menuLine.css'

function Navigation({className = ""}) {
    const navItems= [
        { href: '/', text: 'Home' },
        { href: '/shop', text: 'Shop' },
        { href: '/', text: 'About' },
        { href: '/contact', text: 'Contact' },
    ]
    return (
        <>
            {navItems.map((item, index) => (
                <li key={index} className={`${className} list-none`}>
                  <Link  to={item.href} className="menu-a">{item.text}</Link>  
                </li>
            ))}
        </>
    );
}

export default Navigation;