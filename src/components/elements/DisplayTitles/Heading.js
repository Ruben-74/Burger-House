import React from 'react'

export default function Heading(props) {

    //destructuring
    const{
        children,
        variant, //est ce qu'on veut un h1 / h2 ...
        theme, //style
        display, //color
        alignement,
        className

    } = props;

    const classDefault = "uppercase"
    let font, color, align

    switch(theme){
        case "secondary" : 
            font = "font-secondary"
            break
        default : 
            font = "tracking-tighter" //rapproche les lettres
    }

    switch(display){
        case "gray" : 
            color = "text-gray-600"
            break
        default : 
            color = "text-secondary" //rapproche les lettres
    }

    switch(alignement){
        case "center" : 
            align = "justify-center"
            break
        case "right" : 
            align = "justify-end"
            break
        default : 
            align = "justify-start" //rapproche les lettres
    }


    switch(variant){
        case "h3" : 
            return (
                <div className={`flex ${align} `}>
                    <h3 className={`text-2xl ${classDefault} ${className} ${font} ${color} `}>
                        {children}
                    </h3>
                </div>
            )
        case "h4" : 
            return (
                <div className={`flex ${align} `}>
                    <h3 className={`text-lg ${classDefault} ${className} ${font} ${color} `}>
                        {children}
                    </h3>
                </div>
            )
        default : 
            return(
                // Aligmement a gauche : justify-start - Aligmement a droite : justify-end 
                <div className={`flex ${align} `}>
                    <h2 className={` ${theme === "secondary" ? " text-3xl lg:text-5xl" : "text-3xl"} ${className} ${classDefault} ${font} ${color}`}>
                        {children}
                    </h2>
                </div>
            )

    }
}
