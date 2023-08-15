import React, {useState} from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import SearchResult from '../components/News/SearchResult/SearchResult'

function SearchPage() {
    const [typeText, setTypeText]=useState('');
    
return (
<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header setTypeText={setTypeText}/>
    <div style={{maxWidth:'1110px',marginLeft:'auto',marginRight:'auto'}}>
        <SearchResult typeText={typeText} />
    </div>
    <Footer style={{ marginTop: 'auto' }}/>
</div>
)
}

export default SearchPage