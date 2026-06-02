import { useState } from 'react';
import BannerTopPage from '../Components/common/BannerTopPage';
import { SlidersHorizontal , LayoutGrid} from 'lucide-react';
import ViewList from '../assets/images/SVG/bi_view-list.svg?react';
import ServiceHighlights from '../Components/common/ServiceHighlights';
import { PRODUCTS } from '../data/products';
import Product from '../Components/common/Product';
function Shop() {
    const ShowProduct = 8 ;
    const [currentPage , setCurrentPage] = useState(1);
    const [itemsPerPage ,setItemsPerPage] = useState(ShowProduct)
    const handleItemsPerPageChange = (e) => {
        const raw = e.target.value;
        const value = raw === "" ? ShowProduct : Number(raw);
       if (!Number.isFinite(value) || value < 1) return;
        setItemsPerPage(value);
        setCurrentPage(1);  
    }
    const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage);
    const currentProducts = PRODUCTS.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (
        <>
            <BannerTopPage pageName="Shop"/>
            <div className='w-full h-25 flex items-center justify-around bg-gold-100 '>
                <div className='flex gap-7'>
                    <p className='flex gap-2'><SlidersHorizontal />Filter</p>
                    <LayoutGrid />
                    <ViewList/>
                    <p className='border-l pl-8.5'>Showing {startIndex + 1}–{Math.min(endIndex, PRODUCTS.length)} of {PRODUCTS.length} results</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p>Show</p>
                    <input type="number" placeholder={ShowProduct} onChange={handleItemsPerPageChange} className='h-13.75 w-13.75 bg-white p-4.25'/>
                    <p className='pl-4'>Short by</p>
                    <input type="text" placeholder='Default' className='p-4.25 bg-white w-47'/>
                </div>
            </div>
            <div className='flex flex-col items-center my-15 2xl:px-25.5'>
                <div className=" flex flex-row flex-wrap content-center justify-center items-center 2xl:grid 2xl:grid-cols-4 2xl:gap-1.5">
                    {currentProducts.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
            </div>
            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-2 p-8 mx-auto">
                    {/* Previous */}
                    {currentPage > 1 && (
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            className="h-15 px-6 py-3 bg-gold-100 rounded-xl hover:bg-gold-200 font-light text-[20px] text-gray-700 transition-all"
                        >
                            Previous
                        </button>
                    )}

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`h-15 w-15 px-4 py-3 mx-1 rounded-xl text=[20px] transition-all shadow-sm  ${
                            currentPage === page
                                ? 'bg-gold text-white shadow-lg scale-105'
                                : 'bg-gold-100 hover:bg-gold-200 hover:border-gold text-gray-700 hover:shadow-md'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next */}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            className="h-15 w-24.5 px-6 py-3 bg-gold-100 rounded-xl hover:bg-gold-200 font-light text-[20px] text-gray-700 transition-all"
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
            <ServiceHighlights/>
        </>
    );
}

export default Shop;