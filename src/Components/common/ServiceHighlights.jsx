import Trophy from '../../assets/images/SVG/trophy.svg?react'
import Guarantee from '../../assets/images/SVG/guarantee.svg?react'
import Shipping from '../../assets/images/SVG/shipping.svg?react'
import Support from '../../assets/images/SVG/customer-support.svg?react'

function ServiceHighlights() {
    const service = [
        {
            id : 1 ,
            titel : "High Quality" ,
            description : "crafted from top materials" ,
            icon : <Trophy/>
        },
        {
            id : 2 ,
            titel : "Warranty Protection" ,
            description : "Over 2 years" ,
            icon : <Guarantee/>
        },
        {
            id : 3 ,
            titel : "Free Shipping" ,
            description : "Order over 150 $" ,
            icon : <Shipping/>
        },
        {
            id : 4 ,
            titel : "24 / 7 Support" ,
            description : "Dedicated support" ,
            icon : <Support/>
        },
    ]
    return ( 
        <div className=" w-full py-20 bg-[#FAF3EA] mt-21.25 flex justify-evenly">
            {service.map((item) =>(
                <div className='flex gap-3' key={item.id}>
                    {item.icon}
                    <div>
                        <p className='text-[25px] font-semibold'>{item.titel}</p>
                        <p className='text-[20px] font-medium text-gray-400'>{item.description}</p>
                    </div>
                </div>  
            ))}
            
        </div>
    );
}

export default ServiceHighlights;