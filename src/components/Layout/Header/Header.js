import React, { useState } from 'react'
import './Header.css'
import logo from '../../../Assets/Images/Logo_White.png'
import search from '../../../Assets/search-icon@2x.svg'
import { Link } from 'react-router-dom'

function Header({setTypeText}) {
  //Search box
  const [searchBox, setSearchBox]=useState(false);
  const handleSearchClick = () => {
    setSearchBox(!searchBox);
  };
  //Text on search box

  const handleTextChange =(e)=>{
    setTypeText(e.target.value);
  };

return (
<div className='blueBackground'>
  <div className='topHeader'>
    <Link to='/'><img src={logo} alt='logoPic' className='logoImage'/></Link>
    <div className='search'>
      {searchBox ? (
        <Link to="/searchResult">
          <input type="text" className="searchBox" placeholder="Search all news" onChange={handleTextChange}/>
        </Link>
      ) : null}
      <img src={search} alt="searchIcon" className='searchIcon' onClick={handleSearchClick}/>
    </div>
  </div>
</div>
  )
}
export default Header;