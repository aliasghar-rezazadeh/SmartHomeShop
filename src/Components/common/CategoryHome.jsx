import Bedroom from '../../assets/images/category home/Bedroom category photo.jpg'
import Carpet from '../../assets/images/category home/Carpet category photo.jpg'
import Lighting from '../../assets/images/category home/Lighting category photo.jpg'
import Decoration from '../../assets/images/category home/Photo of decoration category.jpg'
import kitchen from '../../assets/images/category home/Photo of kitchen category.jpg'
import Furniture from '../../assets/images/category home/Photos of furniture categories.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CategoryHome() {
    const CATEGORES = [
        {
            id: 1 ,
            name : "Lighting ",
            photo : Lighting,
            icon : <FontAwesomeIcon icon="fa-regular fa-lamp-street" />,
            productCount : 4,
        },  
        {
            id: 2 ,
            name : "Carpet",
            photo : Carpet,
            icon : <FontAwesomeIcon icon="fa-solid fa-rug" />,
            productCount : 10,
        },
        {
            id: 3 ,
            name : "Bedroom",
            photo : Bedroom,
            icon : <FontAwesomeIcon icon="fa-regular fa-bed" />,
            productCount : 20,
        },
        {
            id: 4 ,
            name : "Furniture ",
            photo : Furniture,
            icon : <FontAwesomeIcon icon="fa-regular fa-loveseat" />,
            productCount : 34,
        },  
        {
            id: 5 ,
            name : "kitchen ",
            photo : kitchen,
            icon : <FontAwesomeIcon icon="fa-regular fa-kitchen-set" />,
            productCount : 11,
        },  
        {
            id: 6 ,
            name : "Decoration ",
            photo : Decoration,
            icon : <FontAwesomeIcon icon="fa-regular fa-wreath" />,
            productCount : 50,
        },  
    ]
    return ( 
        <div className='flex flex-col items-center mt-16.25 mx-3.75 mb-15 xl:mx-0'>
            <p className='text-[30px] font-bold'>Product Categories</p>
            <p className='text-[20px] mt-1.75 mb-6.25'>Discover a variety of interior decoration products from different categories.</p>
            <div className='flex gap-8 flex-row items-center flex-wrap justify-center'>
                {CATEGORES.map((Data , index)=>{
                    return(
                        <div className='flex relative w-98.5 h-53 overflow-hidden rounded-xl cursor-pointer items-center flex-col justify-center flex-nowrap group' key={index}>
                            <div className='relative w-full h-full overflow-hidden'>
                                <img src={Data.photo} alt={Data.photo} className='w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'/>
                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 transition-colors duration-300 ease-in-out group-hover:bg-black/40"></div>
                                <div className='absolute bottom-0 text-white z-2 flex gap-2.5 w-full h-full flex-col items-center justify-evenly py-7.5'>
                                    <span className='text-[25px] xl:text-[30px] rounded-[50%] bg-[#ffffff78] p-3.75 flex items-center justify-center'>{Data.icon}</span>
                                    <h3 className='m-0 font-bold text-[30px]'>{Data.name}</h3>
                                    <p>+{Data.productCount} product</p>
                                </div>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
    );
}

export default CategoryHome;