import React,{useState} from 'react'
import './DropDown.css'
import Arrow from '../../../Assets/Images/add.svg'

function Dropdown({onSelectOrder}) {
const [isOpen, setIsOpen]=useState(false);
const handleDropdownClick=()=>{
  setIsOpen(!isOpen);
}
const handleOrderClick = (order) => {
  onSelectOrder(order);
  setIsOpen(false);
};
return (
<div className="headerDropdown">
  <div className="selected" onClick={handleDropdownClick}>
    <p onClick={() => handleOrderClick('newest')}>Newest first</p>
    <img src={Arrow} alt="arrow" className='arrow' />
  </div>
  {isOpen && (
    <div className='dropdownList'>
      <div className='list' onClick={() => handleOrderClick('oldest')}><p>Oldest</p></div>
    </div>
  )}
</div>
  )
}

export default Dropdown