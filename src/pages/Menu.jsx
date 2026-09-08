import React from 'react'
import { FaStar } from "react-icons/fa";


const Menu = ({name,
id,
image,
category,
type,
price}) => {
  return (
    
        <div className='w-[300px] h-[370px] bg-amber-100 p-3 rounded-lg '>
            <div className='w-full h-[50%] overflow-hidden rounded-lg'>
                 {<img src={image} alt="" className='object-cover' />}
             </div>
            <h2 className='text-amber-500 font-semibold text-[12px]'> 
                {name}
            </h2>
            <h3 className='text-[18px] font-semibold text-gray-800'>
                Classic smash brgers
            </h3>
            <p className='text-[12px] font-semibold text-gray-500'>
                Double smashed patty, cheddar cheese, caramelized onions.
            </p>
            <div className='flex justify-between items-center mt-5'>
                <div>
                    <p className='text-red-600 text-xl font-semibold'>
                    $<span className='text-[14px]'>{price}</span>
                    </p>
                    <p className='flex items-center gap-1 text-amber-500 '>
                    <FaStar className='text-[14px]' /> <span className='text-neutral-500 font-semibold text-[12px]'>(40)</span>
                    </p>
                </div>
                <p className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-lg leading-none">
                        +
                </p>
            </div>
        </div>
    
  )
}

export default Menu