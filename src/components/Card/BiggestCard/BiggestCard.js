import React from 'react'
import './BiggestCard.css'
import sevenPeaksPic from '../../../Assets/Images/Logo_White.png'

function BiggestCard({title,body,image,onClick}) {
  const cardStyle = {
    backgroundImage: `url(${image || sevenPeaksPic})`, // Set the background image
    backgroundSize: 'contain', 
    backgroundRepeat: 'noRepeat',
  };


return (
  <div className='background' style={cardStyle}>
    <div className='context' >
      <div className='title'>{title}</div>
      <div className='body'>{body}</div>
    </div>
  </div>
)
}

export default BiggestCard