import React from 'react'
import Container from '../../elements/Container'
//Carousel JS e CSS
import  AliceCarousel from 'react-alice-carousel' 
// On copie colle le contenu de react-alice.css et on le colle dans un fichier carousel.css afin de modifier le contenu
import '../../../css/carousel.css'
import ImageSlide from '../../../medias/images/Sliding/france.jpg'
import Image1 from '../../../medias/images/products/Product-1.jpg'
import Image2 from '../../../medias/images/products/Product-2.jpg'
import Heading from '../../elements/DisplayTitles/Heading'

//composant au sein d'une meme page pour personnaliser les elements du slide 

const Slide = ({children, category, title, image, description}) =>{
    return(
        <div className='grid md:grid-cols-2 p-3 md:p-4'>
            <div className='p-5 md:p-10 md:mb-10'>
               <Heading variant="h4" className="tracking-widest text-gray-900">
               {category}
               </Heading>
               <Heading theme="secondary" variant="h3" className="mb-5">
               {title}
               </Heading>
               {/* line-height = leading-relaxed met de l'espace entre chaque ligne  */}
               <p className=" font-sans text-xl antialiased font-normal leading-relaxed text-gray-700 mb-0 md:mb-10">{children}</p>
                {/* Contenu */}
            </div>
            {/* On se retrouve dans une grill h-ful w-full l'image prend tt la place */}
            <div className='flex relative w-full h-96 md:h-full'>
                <img src={image} className='item-center justify-center absolute bg-primary top-0 left-0 h-full w-full object-cover object-bottom rounded-t-md z-0' alt={description}/>
            </div>
        </div>
    )
}


export default function Event() {

    //represente ce qu'on peut retoruver dans une base de données sous forme de tableau avec les data
    const items = [
        <Slide
            image={ImageSlide}
            // Afin d'éviter le warning de la console on doit changer l'alt de l'image dynamiquement
            description="une description de l'image" 
            category="événement à venir"
            title="Vivez la demi-finale"
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book
        </Slide>,

        <Slide
            image={Image1}
            description="une description de l'image"
            category="Nouveau burger"
            title="Découvrez killer Burger"
        >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book
        </Slide>,

        <Slide
            image={Image2}
            description="une description de l'image"
            category="Nouvelle recette"
            title="Le végéBurger arrive"
        >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book
        </Slide>

    ];

  return (
    <Container>
        <div className='shadow-2xl mb-20 border boorder-gray-100 rounded-md'>
            <AliceCarousel 
            // Animation style
            animationType="fadeout" 
            autoPlay 
            infinite // permet de scroll sans arret à l'infini
            autoPlayInterval="2800"
            mouseTracking 
            disableButtonsControls
            items={items} />
        </div>
    </Container>
  )
}
