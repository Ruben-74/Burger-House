import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Pictogramme from '../../../medias/svg/picto-burger-house.svg'
import Icon from '../../../medias/svg//ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>
        <div className='w-full'>
            {/* hidden rend invisible le logo et a parti de md je veux que tu reaparaisse */}
            <img src={Logo} alt="Burger House App" className='w-64 hidden md:block'/>
            {/* Quand on attend le md le picto disparait */}
            <img src={Pictogramme} alt="Burger House App" className='w-10 md:hidden'/>
        </div>
        {/* on justife tout sur une ligne et coller sur le bord du container a droite*/}
        <div className='w-full text-secondary'> 
            <div className='items-center justify-end hidden md:flex'>
                <img src={Icon} alt="" className='w-5 h-5 mr-1'/>
                <span className='font-semibold'>Commandez votre repas en ligne</span>
            </div>
            <div className='md:mt-5 flex items-center justify-end'>
                <Button className='tracking-widest mr-3'>
                    Inscription
                </Button>
                <Button className='tracking-widest' color="secondary">
                    Connexion
                </Button>
            </div>
        </div>
    </div>
  )
}
