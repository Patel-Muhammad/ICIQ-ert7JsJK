import React from 'react'

const ImageCardCom = ({img, head, disc}) => {
  return (
    <div className='imagecard-wrapper'>
        <img src={img} alt="imgcard"  />
        <p className='icon-wrapper'>{head}</p>
        <p className='disc'>{disc}</p>
    </div>
  )
}

export default ImageCardCom