import React from 'react'
import Container from '../../elements/Container'
import Heading from '../../elements/DisplayTitles/Heading'
import asset1 from '../../../medias/images/background/Assiette-burger-frites.png'
import asset2 from '../../../medias/images/background/Burger.png'
import asset3 from '../../../medias/images/background/Sauce-pimente.png'

export default function Booking() {
  return (
    <Container>
        <div className='relative mb-20'>
          <img src={asset2} alt="Un hamburger" className='hidden md:block absolute -top-20 -left-36 z-10'/>
          <img src={asset3} alt="Une sauce pimentée" className='hidden lg:block absolute bottom-0 left-0'/>
          <img src={asset1} alt="Une assiette hamburger avec des frites" className="hidden lg:block absolute -right-96" style={{bottom: '-10rem'}}/>
          <div className='max-w-3xl mx-auto sm:px-10 md:py-20'>
            <Heading variant="h3" alignement="center" className="tracking-wide">
              Réservation
            </Heading>
            <Heading alignement="center" theme="secondary" className="mt-5 text-center">
              Réservez votre table
            </Heading>
            <form className='grid sm:grid-cols-2 gap-x-7 gap-y-6 mt-20'>
              <div>
                <label className="tracking-widest font-medium leading-6 text-gray-900" htmlFor='name'>Nom</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    autoComplete='off' 
                    className='focus:ring-primary focus:border-primary focus:border block w-full 
                    border-gray-400 rounded-md p-5' 
                    placeholder='Jhon Doe'
                />
              </div>

              <div>
                <label className="tracking-widest font-medium leading-6 text-gray-900" htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    autoComplete='off' 
                    className='focus:ring-primary focus:border-primary focus:border block w-full 
                    border-gray-400 rounded-md p-5' 
                    placeholder='Jhon.Doe@gmail.com'
                />
              </div>

              <div>
                <label className="tracking-widest font-medium leading-6 text-gray-900" htmlFor="date">Date</label>
                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    autoComplete='off' 
                    className='focus:ring-primary focus:border-primary focus:border block w-full 
                    border-gray-400 rounded-md p-5' 
                />
              </div>

              <div>
                <label className="tracking-widest font-medium leading-6 text-gray-900" htmlFor="time">Heure</label>
                <input 
                    type="time" 
                    name="time" 
                    id="time" 
                    autoComplete='off' 
                    className='focus:ring-primary focus:border-primary focus:border block w-full 
                    border-gray-400 rounded-md p-5' 
                />
              </div>

              <div>
                <label className="tracking-widest font-medium leading-6 text-gray-900" htmlFor="customer">Nombre de personnes</label>
                <input 
                    type="number" 
                    name="customer" 
                    id="customer" 
                    autoComplete='off' 
                    className='focus:ring-primary focus:border-primary focus:border block w-full 
                    border-gray-400 rounded-md p-5' 
                    placeholder='5'
                />
              </div>

              <div>
                {/* la classe invisible permet de supprimer le nom du label sans supprimer la div 
                a l'inverse du hidden et on garde le meme rendu */}
                <label htmlFor="cendBooking" className='invisible'>Trouver une table</label>
                <input 
                    type="button" 
                    name="sendBooking" 
                    id="sendBooking" 
                    className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 cursor-pointer rounded-md animate' 
                    value="Trouver une table"
                />
              </div>

            </form>
          </div>
        </div>
    </Container>
  )
}
