import { Link } from 'react-router-dom';
import backgroundImage  from '../../assets/images/BannerPage.png'
import ViewList from '../../assets/images/SVG/bi_view-list.svg'
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
function BannerTopPage({pageName=""}) {
    const location = useLocation().pathname.split('/');
    return ( 
        <div style={{backgroundImage: `url(${backgroundImage })`}} className='w-full h-80 bg-cover bg-center flex justify-center items-center'>
            <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-[48px]'>{pageName}</p>
                <div className='flex '>
                    <Link to="/" className='font-medium'>Home</Link>
                    <ChevronRight/> 
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
}
export default BannerTopPage;