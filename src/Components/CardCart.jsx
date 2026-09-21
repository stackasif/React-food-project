import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

import image from '../assets/pizza.webp'

function CardCart() {
  return (
    <div className='w-full h-[100px] md:h-[120px] bg-white shadow-lg p-2.5 rounded-lg my-3 flex items-center'>
        <div className='w-[70%] h-full flex '>
            <div className='w-[60%] h-full  overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover'/>
            </div>
            <div className='w-[40%] h-full flex flex-col justify-center  items-center font-semibold gap-2'>
                <p>Pizza</p>

                <div className="w-[70%] h-[30px] flex rounded-md overflow-hidden border border-red-200 shadow-lg">

                    <button className="w-[30%] h-full flex items-center justify-center bg-white text-2xl cursor-pointer">
                        -
                    </button>

                    <span className="w-[40%] h-full flex items-center justify-center bg-orange-100 text-[12px] md:text-sm">
                        1
                    </span>

                    <button className="w-[30%] h-full flex items-center justify-center bg-white text-xl cursor-pointer ">
                        +
                    </button>

                </div>
            </div>
        </div>
        <div className='w-[30%] flex flex-col justify-start items-end gap-3'>
            <p className='font-semibold'>Rs  10000/-</p>
            <RiDeleteBinLine className='text-red-600 text-[20px] cursor-pointer'/>
        </div>
    </div>
  )
}

export default CardCart