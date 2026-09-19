import React, { createContext, useState } from 'react'
import foodItems from '../items/foodItems'
export const dataContext=createContext()

function UserContext({children}) {
    let [cate,setCate]=useState(foodItems)
    let [input,setInput]=useState("")

     function filter(category) {
      if (category==="All Items") {
        setCate(foodItems)
      }else{
        let newList=foodItems.filter((item)=>(item.food_category===category))
        setCate(newList)
      }
    }

    const data={
        cate,
        setCate,
        input,
        setInput,
        filter
    }
  return (
    <div>
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext