import React from 'react'
import './SmallCard.css'
import sevenPeaksPic from '../../../Assets/Images/Logo_White.png'

function SmallCard({titleSmall, image}) {
  const bgImage ={
    backgroundImage: `url(${image || sevenPeaksPic})`,
  }
  return (
<div className='backgroundSmall' style={bgImage}>
  <div className='contextSmall'>
    <div className='titleSmall'>{titleSmall}</div>
  </div>
</div>
  )
}

export default SmallCard