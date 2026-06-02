import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Header from "./Components/layout/header/Header"
import Home from "./Pages/Home"
import Footer from "./Components/layout/Footer"
import { ShopContextProvider } from "./hook/shopContext"
import { LikeContextProvider } from "./hook/LikeContext"
import ShoppingCart from "./Pages/ShoppingCart"
import Wishlist from "./Pages/Wishlist"
import Shop from "./Pages/Shop"
import ProductDetail from "./Pages/ProductDetail"
import { CompareProvider } from './hook/CompareContext';
import Compare from "./Pages/Compare"
import ScrollToTopOnNavigate from "./Components/common/ScrollToTop"

function App() {
  return (
    <CompareProvider>
        <ShopContextProvider>
            <LikeContextProvider>
                <Router>
                    <Header/>
                    <ScrollToTopOnNavigate/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
                        <Route path="/wishlist" element={<Wishlist/>}/>
                        <Route path="/shop" element={<Shop/>}/>
                        <Route path="/compare" element={<Compare/>}/>
                        <Route path="/product/:id" element={<ProductDetail/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </LikeContextProvider>
        </ShopContextProvider>
    </CompareProvider>
  )
}
export default App;