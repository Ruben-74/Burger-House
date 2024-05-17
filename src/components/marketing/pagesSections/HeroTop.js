import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Products from '../../../medias/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
  return (
    <div className="bg-primary w-full">
        <div className="bg-repeat w-full h-full pb-20 md:pb-40" style={{backgroundImage :`url(${Illustration})`}}>
            <Container>
                <Header/>
                {/* quand on emploi une class absolute l'element parent doit etre relative */}
                <div className='relative mt-10 md:mt-28 w-full'>
                  {/* lg:block permet de dire qu'on affiche l'image quand on atteint lg et md et sm on le fait disparaitre */}
                <img src={Products} className='hidden lg:block absolute z-0 lg:-top-64 right-0' style={{width:'560px'}} alt="un menu hamburger avec frites et coca-cola"/>
                  
                  <div className='hidden lg:block absolute right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3 hover:scale-95 transition-all hover:bg-secondary transition-duration-400'>
                      {/* h-full marche en ce basant sur le parametre h-40 de son parent */}
                      <div className='relative w-full h-full text-white flex items-center justify-center'>
                        <div className='absolute w-full h-full rounded-full border-2 border-style z-10'></div>
                        <div className='text-center'>
                            <span className='block font-extrabold'>
                              <span className='text-5xl'>5</span>.49€
                            </span>
                            <span className='tracking-widest uppercase text-sm'>seulement</span>
                          </div>          
                      </div> 
                  </div> 
                  {/* pour pouvoir donner un index la div doit etre positionné en relative ou absolute */}
                  <div className='relative z-10 text-secondary uppercase text-left md:text-center lg:text-left'>
                    <h1 className='mb-4 font-semibold tracking-tighter'>C'est le moment de goûter au bon goût des hamburgers.</h1>
                    {/* block permet de mettre a la ligne ce qu'il suit le Burger automatiquement */}
                    <h2 className='font-secondary shadowTitleSecondary'>
                      <span className='text-7xl md:text-8xl block'>Burger</span> 
                      {/* Valeur par defaut ml doit etre a 0 en md et lorsqu'on passe en sm: on rajoute le ml-3 */}
                      <span className='text-5xl md:text-6xl block sm:inline-block'>House</span> 
                      <span className='text-4xl sm:ml-2'> Click<span className='text-red-primary'>&</span>Collect</span>
                    </h2>
                  </div>
                </div>
                <Button className="mt-5 rounded-sm w-full md:ml-auto md:mr-auto sm:w-1/2 md:w-1/3 lg:w-1/3"  color="secondary" theme="big">
                  Créer mon compte
                </Button>
            </Container>
        </div>
    </div>
  )
}
