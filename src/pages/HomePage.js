import React from 'react'
import HeroTop from '../components/marketing/pagesSections/HeroTop' //importation de type dynamique
import LastProduct from '../components/marketing/pagesSections/LastProducts'
import Products from '../components/marketing/pagesSections/Products'
import Event from '../components/marketing/pagesSections/Event'
import Booking from '../components/marketing/pagesSections/Booking'
import Footer from '../components/marketing/pagesSections/Footer'

export default function HomePage() {
  return (
    // <> Pas besoin d'avoir 1 div (impossible d'avoir deux div cote a cote)
    <>
      {/* <div className='bg-red-500 sm:bg-blue-700 md:bg-pink-400 lg:bg-black'>dzedeefefefe</div> */}
        <HeroTop/>
        <LastProduct/>
        <Products/>
        <Event/>
        <Booking/>
        <Footer/>

    </>
  )
}
