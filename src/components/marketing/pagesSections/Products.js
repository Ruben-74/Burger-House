import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitles/HeadingTitles'
import Heading from '../../elements/DisplayTitles/Heading'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'
import Button from '../../elements/Button'

export default function Products() {
  return (

    <Container>
        <HeadingTitles variant="h3">
            Toujours des délicieux burgers
        </HeadingTitles>

        <Heading theme="secondary" alignement="center" className="my-5">
            Choisissez et savourez
        </Heading>

        <p class="text-center tracking-wide text-lg leading-relaxed font-light text-gray-800">
          The place is close to Barceloneta Beach and bus stop just 2 min by walkand near to.
        </p>

        <div className='grid lg:grid-cols-3 gap-5 lg:gap-x-3 mb-20 mt-10'>

          <div className='w-full md:w-2/3 sm:w-2/3 lg:w-full mx-auto h-full text-gray-700 bg-white bg-clip-border rounded-xl shadow transition duration-300 group transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer border  hover:shadow-secondary-1 animate'>
              <div className='relative w-full h-72'>
                <img src={Product1} className='absolute bg-primary top-0 left-0 h-full w-full  object-cover rounded-t-md' alt="Un hamburger"/>
              </div>
              <div className='flex flex-col items-center justify-center px-5 pb-5'>
                <Heading variant="h3" className="my-5 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Lorem ipsum dolor
                </Heading>
                <p class="pb-1 text-center block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                  Because it&apos;s about motivating the doers. Because I&apos;m here to
                </p>
                <div class="w-1/2 relative flex justify-center flex-wrap ">
                  <Button color="danger" className="font-secondary rounded-sm ButtonDesign animate hover:bg-secondary">Commandez</Button>
                </div>
              </div>
          </div>
            
          <div className='w-full md:w-2/3 sm:w-2/3 lg:w-full mx-auto h-full text-gray-700 bg-white bg-clip-border rounded-xl shadow transition duration-300 group transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer border  hover:shadow-secondary-1 animate'>
              <div className='relative w-full h-72'>
                <img src={Product2} className='absolute bg-primary top-0 left-0 h-full w-full  object-cover rounded-t-md' alt="Un hamburger"/>
              </div>
              <div className='flex flex-col items-center justify-center px-5 pb-5'>
                <Heading variant="h3" className="my-5 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Lorem ipsum dolor
                </Heading>
                <p class="pb-1 text-center block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                  Because it&apos;s about motivating the doers. Because I&apos;m here to
                </p>
                <Button color="danger" className="font-secondary rounded-sm ButtonDesign animate hover:bg-secondary">Commandez</Button>
              </div>
          </div>

          <div className='w-full md:w-2/3 sm:w-2/3 lg:w-full mx-auto h-full text-gray-700 bg-white bg-clip-border rounded-xl shadow transition duration-300 group transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer border  hover:shadow-secondary-1 animate'>
              <div className='relative w-full h-72'>
                <img src={Product3} className='absolute bg-primary top-0 left-0 h-full w-full  object-cover rounded-t-md' alt="Un hamburger"/>
              </div>
              <div className='flex flex-col items-center justify-center px-5 pb-5'>
                <Heading variant="h3" className="my-5 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Lorem ipsum dolor
                </Heading>
                <p class="pb-1 text-center block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                  Because it&apos;s about motivating the doers. Because I&apos;m here to
                </p>
                <Button color="danger" className="font-secondary rounded-sm ButtonDesign animate hover:bg-secondary">Commandez</Button>
              </div>
          </div>

        </div>


    </Container>
  )
}
