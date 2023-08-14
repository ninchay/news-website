import React,{useEffect, useState} from 'react'
import './SearchResult.css'
import getSearch from '../../../apis/service/getSearch';
import MediumCard from '../../Card/MediumCard/MediumCard'
import { Link } from 'react-router-dom';
import Pending from '../../Feature/Pending/Pending';

function SearchResult({typeText}) {
  const [searchDatas, setSearchDatas] = useState([]);

  useEffect(() => {
    if (typeText.length > 0) {
      getSearch(typeText)
        .then(data => {
          setSearchDatas(data.response.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [typeText]);

  return (
  <div>
    <h1 className='header'>Search results</h1>
    <div className='bigSearch'>
      {searchDatas.map((searchData,index)=>{
        return(
          <div key={index} className='searchResultNews'>
            <Link to="/article" state={{data:searchData}}>
            <MediumCard
            titleMed={searchData.webTitle}
            image={searchData.fields.thumbnail}
            />
            </Link>
          </div>
        )
      })}
    </div>
  </div>

  )
}

export default SearchResult