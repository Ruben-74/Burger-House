import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/products/LastProducts-1.jpg'
import Image2 from '../../../medias/images/products/LastProducts-2.jpg'
import Image3 from '../../../medias/images/products/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <Container>
      {/* grid-rows-2 permet de definir sur ta grille principal le nombre de ligne qu'elle comporte et grid-cols-2 les colonnes */}
        <div className='grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 gap-3 lg:gap-9 w-full h-96 lg:h-96 md:h-full sm:h-full lg:px-11 md:px-11 my-20 text-white uppercase'>
          {/* row-span-2 permet de dire que la colone transforme 2 lignes en 1 seul afin de creer un block uni */}
          
          {/* relative doit etre employé sur lnoeud parent afin d'eviter que la propiété absolute emporte l'image tout en haut de la page */}
          <div className='group relative bg-primary lg:row-span-2 h-full rounded-md p-5 md:p-10 sm:p-8 lg:p-7 cursor-pointer hover:translate-x-1 transition-all transition-duration-600'>
            {/* afin de faire resortir une police sur une image blanche on peut creer une div avec une opacité-30 (plus la valeur est grande moin c'est opâque) et un degradé de couleur noir (bg-black ou gradient) */}
             <div className=' absolute z-10 top-0 left-0 rounded-md w-full h-full group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:via-black group-hover:to-primary-hover group-hover:opacity-10 bg-gradient-to-b from-black via-transparent to-black opacity-40 hover:'></div>
            {/* absolute rend l'image justaposé au container et top-0 et left-0 elimine le padding creer afin de se superposer a la pêrfection sur le container */}
             <img src={Image1} className='absolute top-0 left-0 w-full h-full object-cover object-center hover:object-right z-0 rounded-md' alt="Un délicieux hamburger exposé sur une pièce de bois" />
              <div className='relative z-10 hover:translate-x-2 transition-all'>
                <span className='block font-bold text-xl lg:text-lg text-primary'>killer Burger</span>
                <span className='text-xl lg:text-2xl font-black'>Burger le plus populaire</span>
              </div>
          </div>
          <div className='group relative bg-primary h-full rounded-md p-5 md:p-10 sm:p-8 lg:p-7 cursor-pointer hover:translate-x-3 transition-all transition-duration-600'>
          {/* w-full et h-full va prendre l'espace entier du container et centramisant l'image (créer un etirement des images) */}
          <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full group-hover:bg-gradient-to-r from-yellow-500 via-primary to-secondary opacity-20 transition-all transition-duration-500' ></div>
             <img src={Image2} className='absolute top-0 left-0 w-full h-full object-cover object-center z-0 rounded-md'alt="Deux délicieux hamburger exposé sur une pièce de bois" />
              <div className='relative z-10 hover:translate-x-2 transition-all'>
                <span className='block font-bold text-lg hover: text-red-primary'>Island Burger</span>
                <span className='block text-xl lg:text-2xl font-black'>Plus de plaisir</span> 
                <span className='text-xl lg:text-2xl font-black'>Plus de goût</span>
              </div>
          </div>
          {/* object cover va redimensionner l'image evite l'etirement( en css c'est l'object fit : cover) */}
          <div className='group relative bg-primary h-full rounded-md p-5 md:p-10 sm:p-8 lg:p-7 cursor-pointer hover:translate-x-3 transition-all transition-duration-600'>
            {/* object-center permet d'aligner a gauche ou a droite afin de voir un produit si l'iamge trop grande */}
            <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full group-hover:bg-gradient-to-r from-yellow-500 via-primary to-secondary opacity-20 transition-all transition-duration-500' ></div>
            <img src={Image3} className='absolute top-0 left-0 w-full h-full object-cover object-center z-0 rounded-md'alt="Un délicieux hamburger exposé sur une pièce de bois"  />
              {/* lorsque z-10 se trouve tout seul il n'est pas pris en compte car il ne s'agit pas d'un element positionné (relative ou absolute avant) */}
              <div className='relative z-10 hover:translate-x-2 transition-all'>
                  <span className='block font-bold text-xl lg:text-lg text-red-primary'>Orlando's Burger</span>
                  <span className='text-xl lg:text-2xl font-black'>Frais & pimenté</span>
              </div>
          </div>

        </div>
    </Container>
  )
}
