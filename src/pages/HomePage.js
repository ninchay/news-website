import React, {useState, useEffect} from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer';
import getNews from '../apis/service/getNews';
import getSports from '../apis/service/getSports';
import TopStories from '../components/News/TopStories/TopStories';
import Sport from '../components/News/Sport/Sport';

function HomePage() {

return (
<div>
    <Header/> 
    <div style={{maxWidth:'1110px',marginLeft:'auto',marginRight:'auto'}}>
        <TopStories/>
        <Sport />
    </div>
    <Footer />
</div>
  )
}

export default HomePage