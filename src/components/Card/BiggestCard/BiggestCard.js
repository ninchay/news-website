import React from 'react'
import './BiggestCard.css'
import sevenPeaksPic from '../../../Assets/Images/Logo_White.png'

function BiggestCard({title,body,image}) {
  const cardStyle = {
    backgroundImage: `url(${image || sevenPeaksPic})`, 
    backgroundSize:'contain',
    backgroundRepeat:'noRepeat'
};


return (
  <div className='backgroundBig' style={cardStyle}>
    <div className='context' >
      <div className='title'>{title}</div>
      <div className='body'>{body}</div>
    </div>
  </div>
)
}

export default BiggestCard