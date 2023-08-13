import React, { useState } from 'react'
import './Header.css'
import logo from '../../../Assets/Images/Logo_White.png'
import search from '../../../Assets/search-icon@2x.svg'
import { Link } from 'react-router-dom'

function Header() {
  const [searchBox, setSearchBox]=useState(false);
  const handleSearchClick = () => {
    setSearchBox(!searchBox);
  };

return (
<div className='blueBackground'>
  <div className='topHeader'>
    <Link to='/'><img src={logo} alt='logoPic' className='logoImage'/></Link>
    <div className='search'>
      {searchBox ? (
        <input type="text" className="searchBox" placeholder="Search all news" />
      ) : null}
      <img src={search} alt="searchIcon" className='searchIcon' onClick={handleSearchClick}/>
    </div>
  </div>
</div>
  )
}
export default Header;