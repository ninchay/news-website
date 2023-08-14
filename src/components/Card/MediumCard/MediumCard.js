import React from 'react'
import './MediumCard.css'
import sevenPeaksPic from '../../../Assets/Images/Logo_White.png'
function MediumCard({titleMed,bodyMed,image}) {

  const bgImage ={
    backgroundImage: `url(${image || sevenPeaksPic})`,
  }
  return (
    <div className='backgroundMed' style={bgImage}>
    <div className='contextMed'>
      <div className='titleMed'>{titleMed}</div>
      <p className='bodyMed'>{bodyMed}</p>
    </div>
  </div>
  )
}

export default MediumCard;