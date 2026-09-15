import React from 'react'
import { FaStar,FaPlus } from "react-icons/fa";




const Menu = ({name,
id,
image,
category,
type,
description,
price}) => {
  return (
    
        <div className='w-[300px] h-[400px] bg-amber-100 p-3 rounded-lg '>
            <div className='w-full h-[50%] overflow-hidden rounded-lg'>
                 {<img src={image} alt="" className='object-cover' />}
             </div>
            <h2 className='text-amber-500 font-semibold text-[12px]'> 
                {category}
            </h2>
            <h3 className='text-[18px] font-semibold text-gray-800'>
                {name}
            </h3>
            <p className='text-[12px] font-semibold text-gray-500'>
                {description}
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
                <p className="w-6 h-6  bg-red-600 font-semibold text-white shadow-lg hover:bg-red-700 rounded-full flex items-center justify-center text-lg leading-none cursor-pointer">
                        <FaPlus className='text-[12px]'/>
                </p>
            </div>
            <div className='w-full  bg-red-600 font-semibold text-white shadow-lg hover:bg-red-700 rounded-lg cursor-pointer py-1.5 my-2'>
                <h4 className='text-center'>
                    Add to dish
                </h4>
            </div>
        </div>
    
  )
}

export default Menu