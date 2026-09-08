import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import Marquee from '../Components/Marquee'
import CategoriesPage from '../Components/CategoriesPage'
import About from './About'
import Menu from './Menu'
import Offer from '../Components/Offer'
import FastFood from '../Components/FastFood'
import ChefSection from './ChefSection'
import OpenTime from '../Components/OpenTime'
import ContactSection from '../Components/ContactSection'
import Footer from './Footer'
import foodItems from '../items/foodItems'



function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf4]">
        <Nav />
      
      <main className="w-full max-w-[1280px] mx-auto">
        <Hero />
      </main>

      <Marquee />

      <div className="w-full max-w-[1280px] mx-auto">
        <CategoriesPage />
      </div>
       <About/>

      <div className="w-full max-w-[1280px] mx-auto flex flex-wrap gap-5 py-8">
        {foodItems.map((item) => (
          <Menu
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            category={item.food_category}
            type={item.food_type}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>

      <Offer />
      <FastFood />
      <ChefSection/>
      
      <OpenTime/>

      <ContactSection />
      <Footer/>
    </div>
  )
}

export default Home