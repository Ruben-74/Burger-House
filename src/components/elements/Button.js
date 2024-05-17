import React from 'react'

export default function Button({children, className, color, theme}) {
  // className recupere le style du fichier HeroTop passer au niveau de la balise Button 
  // et l'injecte dans cette balise button a travers le ${className}

  let background 

  //Façon avec condition si / sinon si / sinon
  if (color === 'secondary') {
    background = "bg-secondary hover:bg-secondary-hover"
  }
  else if (color === 'danger') {
    background = "bg-red-primary hover:bg-red-primary-hover"
  }
  else {
    background = "bg-primary hover:bg-primary-hover"
  }

  //La meme chose averc un switch
  switch (color) {
    case 'secondary': background="bg-secondary hover:bg-secondary-hover"
      break;
    case 'danger': background="bg-red-primary hover:bg-red-primary-hover"
      break;
    default : background="bg-primary hover:bg-primary-hover"
  }

  switch (theme) {
    case 'small' : 
      return (
        <div>
          <button className={`${className} ${background} px-4 py-2 uppercase shadow-xl
          text-white text-xs font-medium animate`}>
              {children}
          </button>
        </div>
      )
    case 'big' : 
      return (
        <div className='block md:flex lg:block'>
          <button className={`${className} ${background} px-4 py-4 md:px-8 md:py-4 uppercase shadowDesign
          text-white md:text-base text-sm font-medium animate`}>
              {children}
          </button>
        </div>
      )
    default : 
      return (
        <div>
          <button className={`${className} ${background}  px-4 py-3 uppercase shadow-xl
          text-white text-xs md:text-sm font-medium animate`}>
              {children}
          </button>
       </div>
      )

  }
}


