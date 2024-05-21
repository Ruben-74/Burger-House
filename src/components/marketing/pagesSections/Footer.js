import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
import { MapPinIcon , EnvelopeIcon } from '@heroicons/react/16/solid'
// AUTRE FACON D'IMPORTER UNE IMAGE ET LA STYLISER
import { ReactComponent as Logo } from '../../../medias/svg/Logo-burger-house-white.svg'
import IcoInsta from '../../../medias/svg/instagram-brands.svg'
import IcoFacebook from '../../../medias/svg/facebook-f-brands.svg'
import IcoTwitter from '../../../medias/svg/twitter-brands.svg'
import IcoWhatsapp from '../../../medias/svg/whatsapp-brands.svg'

export default function Footer() {
  return (

      <Container>
            <div className='relative w-full h-full lg:mb-10 p-5 text-white'>
                <img src={BackgroundImage} alt="conception d'un hamburger sur une table" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0'/>
                <div className='relative grid md:grid-cols-2 z-10'>
                    <div className='group w-full p-5 md:mt-20 mt-10 md:mb-28'>
                    <Logo fill='#ffff' className='st0 w-2/3 animate'/>
                        <p className='mt-10 animate tracking-wide'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                    </div>
                    <div className='md:h-full w-full flex flex-col items-start justify-start md:items-center md:justify-center mb-3 md:mb-0 p-5 md:p-0'>
                        <div className='group flex items-center'>
                            <MapPinIcon className="group-hover:text-primary animate h-6 md:h-10 w-10 mr-5"/>
                            <span className='uppercase font-semibold text-sm md:text-lg tracking-tighter'>15 place bellecour, 6900 Lyon</span>
                        </div>
                        <div className='group flex items-center mt-5'>
                            <EnvelopeIcon className="group-hover:text-primary animate h-6 md:h-10 w-10 mr-6"/>
                            <span className='lg:mr-7 uppercase font-semibold text-sm md:text-lg tracking-tighter'>info@burger-house.com</span>
                        </div>
                    </div>
                </div>
                <div className='relative pl-7 sm:p-6 z-10 flex items-center justify-between'>
                    <div className='justify-start uppercase font-extrabold text-xs sm:text-sm'>
                        © Burger House 2024. All rights reserved 
                    </div>
                    <div className='flex justify-end gap-1'>
                        {/* group permet a l'element parent de creer une zone clicable plus importante */}
                        <a href='https://www.instagram.com/' rel="noreferrer" target='_blank' className='group'>
                                <img src={IcoInsta} alt="" className='w-6 h-6 sm:w-8 sm:h-8 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1'/>
                        </a>
                        <a href='https://www.facebook.com/' rel="noreferrer" target='_blank' className='group'>
                                <img src={IcoFacebook} alt="" className='w-6 h-6 sm:w-8 sm:h-8 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1'/>
                        </a>
                        <a href='https://www.twitter.com/' rel="noreferrer" target='_blank' className='group'>
                                <img src={IcoTwitter} alt="" className='w-6 h-6 sm:w-8 sm:h-8 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1'/>
                        </a>
                        <a href='https://www.whatsapp.com/' rel="noreferrer" target='_blank' className='group'>
                                <img src={IcoWhatsapp} alt="" className='w-6 h-6 sm:w-8 sm:h-8 mr-2 bg-white group-hover:bg-primary animate rounded-full p-1'/>
                        </a>
                    </div>
                </div>
            </div>
        </Container>

  )
}
