import React from 'react'
// Autre variante a {children} pour permettre de recuperer le contenu dans Products.js
export default function HeadingTitles(props) {

    //destructuring
    const{
        children,
        variant //est ce qu'on veut un h1 / h2 ...
    } = props;

    //inline-block permet de dire a un element de prendre ce qu'il y ait necessaire de place
    // h1 fonctionne comme une div 
    const classDefault = "px-7 py-3 bg-secondary text-white uppercase font-bold animate shadowDesign"


    switch(variant){
        case "h3" : 
            return (
                <div className='flex items-center justify-center my-5'>
                    <h3 className={`text-sm ${classDefault}`}>
                        {children}
                    </h3>
                </div>
            )
        default : 
            return(
                <div className='flex items-center justify-center my-5'>
                    <h2 className={`${classDefault}`}>
                        {children}
                    </h2>
                </div>
            )

    }
}
