import React, {useState} from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import SearchResult from '../components/News/SearchResult/SearchResult'

function SearchPage({newsData, sportData}) {
    const [typeText, setTypeText]=useState('');
return (
<div>
    <Header setTypeText={setTypeText}/>
    <div style={{maxWidth:'1110px',marginLeft:'auto',marginRight:'auto'}}>
        <SearchResult typeText={typeText}/>
    </div>
    <Footer/>
</div>
)
}

export default SearchPage