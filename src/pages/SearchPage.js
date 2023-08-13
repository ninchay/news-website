import React from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import SearchResult from '../components/News/SearchResult/SearchResult'

function SearchPage({newsData, sportData}) {
return (
<div>
    <Header/>
    <div style={{maxWidth:'1110px',marginLeft:'auto',marginRight:'auto'}}>
        <SearchResult/>
        
    </div>
    <Footer/>
</div>
)
}

export default SearchPage