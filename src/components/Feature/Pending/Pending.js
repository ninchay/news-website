import React from 'react'
import './Pending.css'
import circlePending from '../../../Assets/Images/Circular.svg'

function Pending() {
return (
<div className='pending'>
   <img src={circlePending} alt="pendingIconCircle"/>
</div>
)
}

export default Pending