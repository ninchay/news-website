import React,{useState} from 'react'
import './DropDown.css'
import Arrow from '../../../Assets/Images/add.svg'

function Dropdown() {
const [isOpen, setIsOpen]=useState(false);
const handleDropdownClick=()=>{
  setIsOpen(!isOpen);
}
return (
<div className="headerDropdown">
  <div className="selected" onClick={handleDropdownClick}>
    <p>Newest first</p>
    <img src={Arrow} alt="arrow" className='arrow' />
  </div>
  {isOpen && (
    <div className='dropdownList'>
      <div className='list'><p>Oldest</p></div>
      <div className='list'><p>Most Popular</p></div>
    </div>
  )}
</div>
  )
}

export default Dropdown