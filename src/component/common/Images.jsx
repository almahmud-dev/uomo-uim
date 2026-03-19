import React from 'react'

const Images = ({imgSrc,className,imgAlt}) => {
    return (
       <img src={imgSrc} alt={imgAlt} className={`${className}`}/>
    )
}

export default Images
