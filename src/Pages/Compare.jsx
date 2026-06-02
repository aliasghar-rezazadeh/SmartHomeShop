import { useContext, useEffect } from "react";
import { CompareContext } from "../hook/CompareContext";
import { Link } from "react-router-dom";
import BannerTopPage from '../Components/common/BannerTopPage';
function Compare () {
    const { compareItems, removeFromCompare, clearCompare } = useContext(CompareContext);
    
    // useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // }, []);

    const renderCell = (item, key, formatFn) => {
        const value = item?.[key];
        return formatFn ? formatFn(value, item) : value;
    };

    if (!compareItems?.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-12 bg-white rounded-3xl shadow-2xl">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                        <span className="text-3xl">⚖️</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">No items to compare</h2>
                    <p className="text-gray-500 mb-8">Choose products to compare their features</p>
                    <Link to="/shop" className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-all" >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    const LABEL_WIDTH = 180;
    const PRODUCT_MIN_WIDTH = 220;

    const cellBorder = "border-r border-gray-300";
    const rowBorder = "border-b border-gray-300";

    return (
        <>
            <BannerTopPage pageName="Compare"/>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        {/* <h1 className="text-3xl font-bold">Compare Products</h1> */}
                        <p className="text-gray-600">({compareItems.length} items selected)</p>
                    </div>
                    <div>
                        <Link to="/shop" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mr-3">
                            Add Compare
                        </Link>
                        <button onClick={clearCompare} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                            Clear All
                        </button>
                    </div>
                </div>
                <div className=" overflow-x-auto border border-gray-300 rounded-lg">
                    <div className="w-full">
                        <div className={`flex ${rowBorder}`}>
                            <p className={`sticky left-0 z-30 bg-gray-100 p-4 font-semibold ${cellBorder} shrink-0`} style={{ width: LABEL_WIDTH, minWidth: LABEL_WIDTH }}>
                                Image
                            </p>
                            {compareItems.map((item) => (
                                <div key={item.id} className={`p-4 text-center ${cellBorder} bg-white min-w-55 flex-1`}>
                                    <img src={item.productImage} alt={item.productName} className="mx-auto h-24 w-24 object-cover rounded"/>
                                    <h4 className="mt-2 font-semibold">{item.productName}</h4>
                                    <Link to={`/product/${item.id}`} className="text-blue-600 text-sm hover:underline">
                                        View More
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {[
                            { label: "Price", key: "prise", format: (v) => `Rp ${v}` },
                            { label: "SKU", key: "SKU" },
                            { label: "Status", key: "status" },
                            { label: "Rating", key: "rating" },
                            {
                                label: "Colors",
                                key: "color",
                                format: (v) =>
                                    Array.isArray(v) ? (
                                        <div className="flex justify-center gap-1 flex-wrap">
                                            {v.map((color, idx) => (
                                                <div key={idx} style={{ backgroundColor: color }} className="w-6 h-6 rounded-full border border-gray-300 shrink-0" />
                                            ))}
                                        </div>
                                    ) : (v),
                            },
                            {
                                label: "Sizes",
                                key: "size",
                                format: (v) => (Array.isArray(v) ? v.join(" | ") : v),
                            },
                            {
                                label: "Category",
                                key: "Category",
                                format: (v) => (Array.isArray(v) ? v.join(", ") : v),
                            },
                        ].map((column) => (
                            <div key={column.key} className={`flex ${rowBorder}`}>
                                <p className={`sticky left-0 z-30 bg-gray-50 p-4 font-semibold ${cellBorder} shrink-0`} style={{ width: LABEL_WIDTH, minWidth: LABEL_WIDTH }}>
                                    {column.label}
                                </p>
                                {compareItems.map((item) => (
                                    <div key={item.id} className={`p-4 text-center ${cellBorder} bg-white min-w-55 flex-1`}>
                                        {renderCell(item, column.key, column.format)}
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="flex">
                            <p className={`sticky left-0 z-30 bg-gray-50 p-4 font-semibold ${cellBorder} shrink-0`} style={{ width: LABEL_WIDTH, minWidth: LABEL_WIDTH }}>
                                Actions
                            </p>
                            {compareItems.map((item) => (
                                <div key={item.id} className={`p-4 text-center ${cellBorder} bg-white min-w-55 flex-1 flex flex-col items-center gap-2`}>
                                    <Link to={`/product/${item.id}`} className="text-blue-600 hover:underline">
                                        View More
                                    </Link>
                                    <button onClick={() => removeFromCompare(item.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Compare;