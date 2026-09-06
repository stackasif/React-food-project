import React from 'react'
import { FaStar } from "react-icons/fa";


const Menu = () => {
  return (
    <div className='w-[1250px]'>
        <div className='w-[220px]'>
            <img src="./rest.webp" alt=""  />
        </div>
        <h2>
            Burger
        </h2>
        <h3>
            Our top burgers
        </h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, aliquam.
        </p>
        <div>
            <div>
                <p>
                $<span>50.00</span>
                </p>
                <p>
                <FaStar /> <span>40</span>
                </p>
            </div>
            <p>
                +
            </p>
        </div>

        
    </div>
  )
}

export default Menu